
-- Remove public policies on email drip tables (security risk - exposes email templates and recipient data)
DROP POLICY IF EXISTS "Service can read active sequences" ON public.email_drip_sequences;
DROP POLICY IF EXISTS "Service can read sequence emails" ON public.email_drip_emails;
DROP POLICY IF EXISTS "Service can insert drip logs" ON public.email_drip_log;
DROP POLICY IF EXISTS "Service can read drip logs" ON public.email_drip_log;
