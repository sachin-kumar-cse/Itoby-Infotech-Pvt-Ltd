import { createHash, timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import { submitUrlsToIndexNow, submitSitemapUrlsToIndexNow } from "@/lib/indexnow";

function isAuthorized(request: Request): boolean {
  const secret = process.env.INDEXNOW_SECRET;
  if (!secret) return false;

  const provided =
    request.headers.get("x-indexnow-secret") || new URL(request.url).searchParams.get("secret");
  if (!provided) return false;

  // Compare fixed-length digests so the check is constant-time and doesn't leak the secret's length.
  const expected = createHash("sha256").update(secret).digest();
  const actual = createHash("sha256").update(provided).digest();
  return timingSafeEqual(expected, actual);
}

function unauthorized() {
  return NextResponse.json(
    {
      success: false,
      status: 401,
      message: "Unauthorized: missing or invalid x-indexnow-secret header",
    },
    { status: 401 }
  );
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) return unauthorized();

  try {
    const urlObj = new URL(request.url);
    const isBulkParam = urlObj.searchParams.get("bulk") === "true";
    const body = await request.json().catch(() => ({}));

    if (isBulkParam || body.bulk || body.sitemapBulk) {
      const bulkResult = await submitSitemapUrlsToIndexNow();
      return NextResponse.json(bulkResult, { status: 200 });
    }

    const urls: string[] = body.urls && Array.isArray(body.urls) ? body.urls : ["/about"];
    const result = await submitUrlsToIndexNow(urls);

    return NextResponse.json(result, { status: result.status === 202 ? 200 : result.status });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        status: 500,
        message: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const urlObj = new URL(request.url);
    const action = urlObj.searchParams.get("action");

    if (action === "bulk") {
      if (!isAuthorized(request)) return unauthorized();
      const bulkResult = await submitSitemapUrlsToIndexNow();
      return NextResponse.json(bulkResult, { status: 200 });
    }

    return NextResponse.json({
      service: "IndexNow Bulk Submission Service",
      status: "active",
      endpoint: "https://api.indexnow.org/indexnow",
      host: "www.itobyinfotech.com",
      keyLocation: "https://www.itobyinfotech.com/9749d1b24b734030a10930e6a41b54f1.txt",
      usage:
        "Requires the 'x-indexnow-secret' header (matching INDEXNOW_SECRET). POST /api/indexnow with { 'bulk': true } or GET /api/indexnow?action=bulk to submit all sitemap canonical URLs.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        status: 500,
        message: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
