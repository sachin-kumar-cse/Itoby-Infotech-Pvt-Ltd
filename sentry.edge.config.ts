import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || "https://d61a1ec79133f67dc8d470c679945e21@o4511886070382592.ingest.us.sentry.io/4511886078312448",
  tracesSampleRate: 1.0,
  debug: false,
});
