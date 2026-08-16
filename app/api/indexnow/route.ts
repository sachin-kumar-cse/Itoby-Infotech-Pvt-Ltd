import { NextResponse } from "next/server";
import { submitUrlsToIndexNow, submitSitemapUrlsToIndexNow } from "@/lib/indexnow";

export async function POST(request: Request) {
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
      const bulkResult = await submitSitemapUrlsToIndexNow();
      return NextResponse.json(bulkResult, { status: 200 });
    }

    return NextResponse.json({
      service: "IndexNow Bulk Submission Service",
      status: "active",
      endpoint: "https://api.indexnow.org/indexnow",
      host: "www.itobyinfotech.com",
      keyLocation: "https://www.itobyinfotech.com/9749d1b24b734030a10930e6a41b54f1.txt",
      usage: "POST /api/indexnow with { 'bulk': true } or GET /api/indexnow?action=bulk to submit all sitemap canonical URLs.",
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
