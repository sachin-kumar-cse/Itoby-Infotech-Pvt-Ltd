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

/**
 * Server-side utility to submit updated/new URLs to Microsoft Bing and IndexNow search engines.
 * Protocol: https://www.indexnow.org/documentation
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

  // Normalize URLs to full canonical HTTPS URLs
  const formattedUrls = Array.from(
    new Set(
      urls.map((u) => {
        let clean = u.trim();
        if (!clean.startsWith("http://") && !clean.startsWith("https://")) {
          clean = clean.startsWith("/") ? clean : `/${clean}`;
          clean = `https://${INDEXNOW_HOST}${clean}`;
        }
        return clean;
      })
    )
  );

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
