import { getSitemapRoutes, SITE_URL } from "@/lib/sitemapRoutes";

const INDEXNOW_HOST = "www.itobyinfotech.com";
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "9749d1b24b734030a10930e6a41b54f1";
const INDEXNOW_KEY_LOCATION = `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

export interface IndexNowResult {
  success: boolean;
  status: number;
  message: string;
  submittedCount: number;
  urls: string[];
}

export interface IndexNowBatchResponse {
  batchIndex: number;
  submittedCount: number;
  status: number;
  message: string;
  success: boolean;
}

export interface IndexNowBulkResult {
  totalSitemapUrls: number;
  validUrls: number;
  excludedUrls: number;
  duplicateUrls: number;
  batches: number;
  submittedUrls: number;
  successfulBatches: number;
  failedBatches: number;
  responses: IndexNowBatchResponse[];
}

/**
 * Normalizes a URL to full canonical HTTPS format with www host.
 */
function normalizeUrl(urlStr: string): string {
  let clean = urlStr.trim();
  if (!clean.startsWith("http://") && !clean.startsWith("https://")) {
    clean = clean.startsWith("/") ? clean : `/${clean}`;
    clean = `https://${INDEXNOW_HOST}${clean}`;
  }
  try {
    const parsed = new URL(clean);
    parsed.protocol = "https:";
    parsed.host = INDEXNOW_HOST;
    parsed.hash = ""; // remove fragments
    return parsed.toString();
  } catch {
    return clean;
  }
}

/**
 * Validates if a URL is a valid, indexable, canonical production route.
 */
function isValidCanonicalUrl(urlStr: string): boolean {
  try {
    const parsed = new URL(urlStr);
    const path = parsed.pathname.toLowerCase();

    // 1. Exclude /about-us (301 redirect)
    if (path === "/about-us" || path.startsWith("/about-us/")) {
      return false;
    }

    // 2. Exclude API, admin, private or dev routes
    if (
      path.startsWith("/admin") ||
      path.startsWith("/api") ||
      path.includes("/_next") ||
      path.includes("/scratch")
    ) {
      return false;
    }

    // 3. Exclude non-production hosts
    if (parsed.host !== INDEXNOW_HOST && parsed.host !== "itobyinfotech.com") {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

/**
 * Generates all raw production sitemap URLs from the same route list as app/sitemap.ts.
 */
export function getProductionSitemapUrls(): string[] {
  return getSitemapRoutes().map((r) => `${SITE_URL}${r.path}`);
}

/**
 * Server-side utility to submit an array of URLs to IndexNow.
 */
export async function submitUrlsToIndexNow(urls: string[]): Promise<IndexNowResult> {
  if (!urls || urls.length === 0) {
    return {
      success: false,
      status: 400,
      message: "No URLs provided for IndexNow submission",
      submittedCount: 0,
      urls: [],
    };
  }

  const formattedUrls = Array.from(
    new Set(
      urls
        .map((u) => normalizeUrl(u))
        .filter((u) => isValidCanonicalUrl(u))
    )
  );

  if (formattedUrls.length === 0) {
    return {
      success: false,
      status: 400,
      message: "No valid canonical URLs remained after filtering",
      submittedCount: 0,
      urls: [],
    };
  }

  const payload = {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: formattedUrls,
  };

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    const isSuccess = response.status === 200 || response.status === 202;

    let message = "";
    switch (response.status) {
      case 200:
        message = "IndexNow URLs submitted successfully (HTTP 200 OK)";
        break;
      case 202:
        message = "IndexNow URLs accepted for processing (HTTP 202 Accepted)";
        break;
      case 400:
        message = "IndexNow submission failed: Invalid format or missing key (HTTP 400 Bad Request)";
        break;
      case 403:
        message = "IndexNow submission failed: Key not valid or keyLocation invalid (HTTP 403 Forbidden)";
        break;
      case 422:
        message = "IndexNow submission failed: URL does not belong to host (HTTP 422)";
        break;
      case 429:
        message = "IndexNow submission failed: Rate limited (HTTP 429 Too Many Requests)";
        break;
      default:
        message = `IndexNow submission completed with status HTTP ${response.status}`;
    }

    return {
      success: isSuccess,
      status: response.status,
      message,
      submittedCount: formattedUrls.length,
      urls: formattedUrls,
    };
  } catch (error) {
    return {
      success: false,
      status: 500,
      message: `IndexNow network error: ${error instanceof Error ? error.message : "Unknown error"}`,
      submittedCount: 0,
      urls: formattedUrls,
    };
  }
}

/**
 * Server-side bulk submission function for all valid canonical sitemap URLs.
 * Handles deduplication, normalization, validation, and auto-batching (<= 10,000 URLs per batch).
 */
export async function submitSitemapUrlsToIndexNow(): Promise<IndexNowBulkResult> {
  const rawUrls = getProductionSitemapUrls();
  const totalSitemapUrls = rawUrls.length;

  // Track counts
  let invalidOrExcludedCount = 0;
  const validNormalizedUrls: string[] = [];
  const seenSet = new Set<string>();
  let duplicateCount = 0;

  for (const raw of rawUrls) {
    const normalized = normalizeUrl(raw);
    if (!isValidCanonicalUrl(normalized)) {
      invalidOrExcludedCount++;
      continue;
    }
    if (seenSet.has(normalized)) {
      duplicateCount++;
      continue;
    }
    seenSet.add(normalized);
    validNormalizedUrls.push(normalized);
  }

  // Ensure /about is present
  const aboutUrl = `https://${INDEXNOW_HOST}/about`;
  if (!seenSet.has(aboutUrl)) {
    validNormalizedUrls.push(aboutUrl);
    seenSet.add(aboutUrl);
  }

  const validUrlsCount = validNormalizedUrls.length;
  const BATCH_SIZE = 10000;
  const batchesList: string[][] = [];

  for (let i = 0; i < validNormalizedUrls.length; i += BATCH_SIZE) {
    batchesList.push(validNormalizedUrls.slice(i, i + BATCH_SIZE));
  }

  const responses: IndexNowBatchResponse[] = [];
  let successfulBatches = 0;
  let failedBatches = 0;
  let totalSubmitted = 0;

  for (let idx = 0; idx < batchesList.length; idx++) {
    const batch = batchesList[idx];
    const res = await submitUrlsToIndexNow(batch);
    const isSuccess = res.success;

    if (isSuccess) {
      successfulBatches++;
    } else {
      failedBatches++;
    }
    totalSubmitted += res.submittedCount;

    responses.push({
      batchIndex: idx + 1,
      submittedCount: res.submittedCount,
      status: res.status,
      message: res.message,
      success: isSuccess,
    });
  }

  return {
    totalSitemapUrls,
    validUrls: validUrlsCount,
    excludedUrls: invalidOrExcludedCount,
    duplicateUrls: duplicateCount,
    batches: batchesList.length,
    submittedUrls: totalSubmitted,
    successfulBatches,
    failedBatches,
    responses,
  };
}
