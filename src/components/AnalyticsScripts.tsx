"use client";

import Script from "next/script";

export function AnalyticsScripts() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-M5G3MH5KZK"
        strategy="lazyOnload"
        onError={() => console.warn("Google Analytics script load skipped or blocked by client")}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-M5G3MH5KZK', { send_page_view: false });
        `}
      </Script>
      <Script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="s4fMLQyoVzP9NLSXPjog5Q"
        strategy="lazyOnload"
        onError={() => console.warn("Ahrefs Analytics script load skipped or blocked by client")}
      />
    </>
  );
}
