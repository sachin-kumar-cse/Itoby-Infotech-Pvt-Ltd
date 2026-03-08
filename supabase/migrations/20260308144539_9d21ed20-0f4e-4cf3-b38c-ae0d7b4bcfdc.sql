-- Email drip campaign sequences table
CREATE TABLE public.email_drip_sequences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  trigger_event text NOT NULL DEFAULT 'contact_form',
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Individual emails in a drip sequence
CREATE TABLE public.email_drip_emails (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  sequence_id uuid NOT NULL REFERENCES public.email_drip_sequences(id) ON DELETE CASCADE,
  subject text NOT NULL,
  body_html text NOT NULL,
  delay_hours integer NOT NULL DEFAULT 24,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Track which emails have been sent to which contacts
CREATE TABLE public.email_drip_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  sequence_id uuid NOT NULL REFERENCES public.email_drip_sequences(id) ON DELETE CASCADE,
  email_id uuid NOT NULL REFERENCES public.email_drip_emails(id) ON DELETE CASCADE,
  recipient_email text NOT NULL,
  sent_at timestamptz NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'sent'
);

-- Enable RLS
ALTER TABLE public.email_drip_sequences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.email_drip_emails ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.email_drip_log ENABLE ROW LEVEL SECURITY;

-- Admin-only policies
CREATE POLICY "Admins can manage drip sequences" ON public.email_drip_sequences FOR ALL TO authenticated USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins can manage drip emails" ON public.email_drip_emails FOR ALL TO authenticated USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins can manage drip logs" ON public.email_drip_log FOR ALL TO authenticated USING (public.is_admin(auth.uid()));

-- Service role needs access for edge functions
CREATE POLICY "Service can read active sequences" ON public.email_drip_sequences FOR SELECT USING (is_active = true);
CREATE POLICY "Service can read sequence emails" ON public.email_drip_emails FOR SELECT USING (true);
CREATE POLICY "Service can insert drip logs" ON public.email_drip_log FOR INSERT WITH CHECK (true);
CREATE POLICY "Service can read drip logs" ON public.email_drip_log FOR SELECT USING (true);