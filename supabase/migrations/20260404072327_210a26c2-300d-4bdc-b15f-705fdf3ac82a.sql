
-- Appointments table for booking system
CREATE TABLE public.appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  service text NOT NULL,
  date date NOT NULL,
  time_slot text NOT NULL,
  message text DEFAULT '',
  status text NOT NULL DEFAULT 'pending',
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can book appointments" ON public.appointments
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "Admins can view appointments" ON public.appointments
  FOR SELECT TO authenticated USING (is_admin(auth.uid()));

CREATE POLICY "Admins can update appointments" ON public.appointments
  FOR UPDATE TO authenticated USING (is_admin(auth.uid()));

CREATE POLICY "Admins can delete appointments" ON public.appointments
  FOR DELETE TO authenticated USING (is_admin(auth.uid()));

-- Lead scores table
CREATE TABLE public.lead_scores (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  name text NOT NULL DEFAULT '',
  score integer NOT NULL DEFAULT 0,
  activity_log jsonb NOT NULL DEFAULT '[]'::jsonb,
  services_interested text[] NOT NULL DEFAULT '{}',
  budget_range text,
  source text DEFAULT 'website',
  last_activity_at timestamp with time zone NOT NULL DEFAULT now(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.lead_scores ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view lead scores" ON public.lead_scores
  FOR SELECT TO authenticated USING (is_admin(auth.uid()));

CREATE POLICY "Admins can update lead scores" ON public.lead_scores
  FOR UPDATE TO authenticated USING (is_admin(auth.uid()));

CREATE POLICY "Admins can delete lead scores" ON public.lead_scores
  FOR DELETE TO authenticated USING (is_admin(auth.uid()));

CREATE POLICY "Anyone can insert/update lead scores" ON public.lead_scores
  FOR INSERT TO anon, authenticated WITH CHECK (true);
