import { NextResponse } from "next/server";
import { submitUrlsToIndexNow } from "@/lib/indexnow";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const urls: string[] = body.urls || ["/careers/ui-ux-designer"];

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

export async function GET() {
  return NextResponse.json({
    service: "IndexNow Submission Service",
    status: "active",
    endpoint: "https://api.indexnow.org/indexnow",
    host: "www.itobyinfotech.com",
    keyLocation: "https://www.itobyinfotech.com/9749d1b24b734030a10930e6a41b54f1.txt",
  });
}
