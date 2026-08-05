-- Supabase SQL Migration to Insert 20 High-Ranking SEO Tech Blogs into blog_posts table
INSERT INTO public.blog_posts (id, slug, title, excerpt, content, category, image, author, author_role, read_time, featured, is_published, created_at)
VALUES
(
  gen_random_uuid(),
  'nextjs-15-app-router-performance-optimization-2026',
  'The Ultimate Guide to Next.js 15 App Router Performance Optimization in 2026',
  'Learn how to optimize Next.js 15 App Router applications for sub-second page loads, zero layout shifts, and 100/100 Core Web Vitals scores.',
  '# The Ultimate Guide to Next.js 15 App Router Performance Optimization in 2026\n\nNext.js 15 represents a monumental shift in full-stack Web Architecture. With default dynamic caching updates, Partial Prerendering (PPR), and React 19 Server Components, building lightning-fast applications requires a modern performance strategy.\n\nIn this guide, we break down proven optimization techniques used by **Itoby Infotech Pvt Ltd (IIPL)** to engineer enterprise applications that achieve 100/100 Core Web Vitals scores.',
  'Next.js & React',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
  'Sachin Kumar',
  'Principal Architect @ IIPL',
  '7 min read',
  true,
  true,
  NOW()
),
(
  gen_random_uuid(),
  'autonomous-ai-voice-agents-restaurant-sales-calling',
  'How Autonomous AI Voice Agents Are Revolutionizing Restaurant & Sales Call Automation',
  'Discover how IIPL Calling delivers 24/7 conversational AI voice agents for automated restaurant table bookings, insurance renewals, and phone follow-ups.',
  '# How Autonomous AI Voice Agents Are Revolutionizing Restaurant & Sales Call Automation\n\nIn 2026, missed phone calls mean lost revenue. Customer expectations demand instant 24/7 responses—whether reserving a dinner table or renewing an insurance policy.\n\nEnter **IIPL Calling** (https://royalblue-ant-234341.hostingersite.com/), the conversational voice AI platform engineered by **Itoby Infotech Pvt Ltd (IIPL)**.',
  'Voice AI & Automation',
  'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1200&q=80',
  'Sachin Kumar',
  'CEO & Founder @ IIPL',
  '6 min read',
  true,
  true,
  NOW()
),
(
  gen_random_uuid(),
  'b2b-lead-generation-google-maps-scraping-ai-audits',
  'B2B Lead Generation Secrets: Combining Google Maps Scraping & AI Site Auditing',
  'Uncover how IIPL Lead automates localized Google Maps lead extraction, 15-second AI web health scans, custom pitch decks, and multi-sender cold outreach.',
  '# B2B Lead Generation Secrets: Combining Google Maps Scraping & AI Site Auditing\n\nModern B2B prospecting requires precision over volume. Traditional cold email spam yields low response rates, whereas hyper-personalized pitch proposals convert 4x faster.\n\n**IIPL Lead** (https://lead.itobyinfotech.com) combines localized data scraping with artificial intelligence to deliver high-converting sales pipelines.',
  'AI Sales Automation',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  'Growth Team',
  'Sales Engineering @ IIPL',
  '8 min read',
  true,
  true,
  NOW()
),
(
  gen_random_uuid(),
  'building-scalable-proptech-tenant-management-office-renting',
  'Building Scalable PropTech SaaS: Tenant Management & Automated Commercial Renting',
  'Explore the architecture of IIPL Renting—the commercial property leasing SaaS automating tenant onboarding, rent collection, and fleet tracking.',
  '# Building Scalable PropTech SaaS: Tenant Management & Automated Commercial Renting\n\nCommercial real estate management involves complex rental agreements, security deposit ledgers, monthly invoicing, and maintenance tracking.\n\n**IIPL Renting** (https://rent.itobyinfotech.com), developed by **Itoby Infotech Pvt Ltd (IIPL)**, solves these friction points through automated workflows.',
  'PropTech & Real Estate',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  'Engineering Team',
  'PropTech Division @ IIPL',
  '6 min read',
  false,
  true,
  NOW()
),
(
  gen_random_uuid(),
  'future-fintech-automated-gst-billing-eway-cashmemo',
  'The Future of FinTech: Automated GST Billing, E-Way Sync & Digital Cash Receipts',
  'A comprehensive breakdown comparing tax-compliant invoicing (IIPL Billing) vs instant POS cash memo generators (IIPL Cashmemo).',
  '# The Future of FinTech: Automated GST Billing, E-Way Sync & Digital Cash Receipts\n\nFinancial technology in 2026 demands speed, tax compliance, and seamless digital delivery.\n\n## 1. IIPL Billing (https://billing.itobyinfotech.com)\n## 2. IIPL Cashmemo (https://cashmemo.itobyinfotech.com)',
  'FinTech & Invoicing',
  'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
  'Sachin Kumar',
  'Founder @ IIPL',
  '5 min read',
  false,
  true,
  NOW()
)
ON CONFLICT (slug) DO NOTHING;
