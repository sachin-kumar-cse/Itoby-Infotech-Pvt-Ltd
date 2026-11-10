// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a user loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn:
    process.env.NEXT_PUBLIC_SENTRY_DSN ||
    "https://d61a1ec79133f67dc8d470c679945e21@o4511886070382592.ingest.us.sentry.io/4511886078312448",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1.0,
  debug: false,
  enableLogs: true,

  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,

  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
