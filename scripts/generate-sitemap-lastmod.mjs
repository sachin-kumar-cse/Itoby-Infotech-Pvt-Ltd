#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUTPUT = join(ROOT, "src", "data", "sitemapLastmod.json");
const OUTPUT_NAME = "sitemapLastmod.json";
const PAGE_FILE = /^page\.(tsx|ts|jsx|js)$/;
const SKIPPED_APP_DIRS = new Set(["app/api", "app/admin"]);
const NON_PAGE_FILES = new Set([
  "sitemap",
  "robots",
  "manifest",
  "error",
  "global-error",
  "not-found",
  "providers",
]);

const log = (msg) => console.log(`[sitemap:lastmod] ${msg}`);

function git(args) {
  return execFileSync("git", ["--literal-pathspecs", ...args], {
    cwd: ROOT,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
  }).trim();
}

function gitUsable() {
  try {
    git(["--version"]);
  } catch {
    log("git is not available; keeping the committed sitemapLastmod.json.");
    return false;
  }
  try {
    if (git(["rev-parse", "--is-shallow-repository"]) === "true") {
      log("shallow clone detected; keeping the committed sitemapLastmod.json.");
      return false;
    }
  } catch {
    log("not a git work tree; keeping the committed sitemapLastmod.json.");
    return false;
  }
  return true;
}

const toPosix = (p) => p.split(sep).join("/");
const rel = (abs) => toPosix(relative(ROOT, abs));

function lastCommitDate(paths) {
  if (paths.length === 0) return null;
  const out = git(["log", "-1", "--format=%cI", "--", ...paths]);
  return out || null;
}

function listEntries(dir) {
  return readdirSync(dir, { withFileTypes: true });
}

function collectAppDirs(absDir, result) {
  const relDir = rel(absDir);
  if (SKIPPED_APP_DIRS.has(relDir)) return;

  const entries = listEntries(absDir);
  const files = entries.filter((e) => e.isFile()).map((e) => e.name);

  if (files.some((f) => PAGE_FILE.test(f))) {
    const sources = files
      .filter((f) => !NON_PAGE_FILES.has(f.replace(/\.[^.]+$/, "")))
      .map((f) => `${relDir}/${f}`);
    result.set(relDir, sources);
  }

  for (const entry of entries) {
    if (entry.isDirectory() && !entry.name.startsWith("_")) {
      collectAppDirs(join(absDir, entry.name), result);
    }
  }
}

function collectFilesRecursive(absDir, out) {
  for (const entry of listEntries(absDir)) {
    const abs = join(absDir, entry.name);
    if (entry.isDirectory()) collectFilesRecursive(abs, out);
    else if (entry.isFile()) out.push(rel(abs));
  }
  return out;
}

function buildLastmodMap() {
  const keyed = new Map();

  const appDirs = new Map();
  collectAppDirs(join(ROOT, "app"), appDirs);
  for (const [key, sources] of appDirs) keyed.set(key, sources);

  const dataDir = join(ROOT, "src", "data");
  for (const entry of listEntries(dataDir)) {
    if (entry.isFile() && entry.name !== OUTPUT_NAME) {
      const key = rel(join(dataDir, entry.name));
      keyed.set(key, [key]);
    }
  }

  const viewsDir = join(ROOT, "src", "views");
  if (existsSync(viewsDir)) {
    for (const key of collectFilesRecursive(viewsDir, [])) keyed.set(key, [key]);
  }

  const sectionsDir = join(ROOT, "src", "components", "sections");
  if (existsSync(sectionsDir) && statSync(sectionsDir).isDirectory()) {
    keyed.set("src/components/sections", ["src/components/sections"]);
  }

  const result = {};
  for (const key of [...keyed.keys()].sort()) {
    const date = lastCommitDate(keyed.get(key));
    if (date) result[key] = date;
  }
  return result;
}

function main() {
  if (!gitUsable()) return;

  const map = buildLastmodMap();
  const next = `${JSON.stringify(map, null, 2)}\n`;
  const current = existsSync(OUTPUT) ? readFileSync(OUTPUT, "utf8") : null;

  if (current === next) {
    log(`up to date (${Object.keys(map).length} entries).`);
    return;
  }
  writeFileSync(OUTPUT, next);
  log(`wrote ${rel(OUTPUT)} (${Object.keys(map).length} entries).`);
}

try {
  main();
} catch (error) {
  log(`skipped: ${error instanceof Error ? error.message : String(error)}`);
}
process.exit(0);
