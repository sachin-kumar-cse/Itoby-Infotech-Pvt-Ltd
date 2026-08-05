import * as Sentry from "@sentry/react";

const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN || (typeof import.meta !== "undefined" && import.meta.env?.VITE_SENTRY_DSN);
const isProd = process.env.NODE_ENV === "production" || (typeof import.meta !== "undefined" && import.meta.env?.PROD);

const initSentry = () => {
  // Only initialize Sentry in production
  if (isProd && dsn) {
    Sentry.init({
      dsn,
      integrations: [Sentry.browserTracingIntegration()],
      tracesSampleRate: 1.0,
      environment: "production",
      // Capture console errors
      beforeSend(event) {
        // Filter out development errors
        if (event.exception) {
          console.error("Error captured by Sentry:", event.exception);
        }
        return event;
      },
    });
  }
};

export default initSentry;