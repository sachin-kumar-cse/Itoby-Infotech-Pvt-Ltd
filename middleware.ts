import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const proto = request.headers.get('x-forwarded-proto') || 'https';
  const pathname = request.nextUrl.pathname;

  // 301 Redirect legacy job UUIDs to SEO slugs
  const legacyJobSlugs: Record<string, string> = {
    '944ab032-029a-4258-b9fb-47d4114fcdbd': 'ui-ux-designer',
    'b9874691-759d-4849-a25b-b243ab71aef4': 'senior-full-stack-developer',
    'e3751fdf-2f6c-484a-b30e-7ff5a11fc4a1': 'mobile-app-developer',
    '61d23419-42ad-40d3-afdb-3c8530172a9b': 'digital-marketing-specialist',
    'f8fa7a37-6498-4b04-93ba-3578215e9389': 'project-manager',
    '67c55a7e-1355-4949-9497-0f1677f854a2': 'devops-engineer',
  };

  if (pathname.startsWith('/careers/')) {
    const jobParam = pathname.replace('/careers/', '');
    if (legacyJobSlugs[jobParam]) {
      const url = request.nextUrl.clone();
      url.pathname = `/careers/${legacyJobSlugs[jobParam]}`;
      return NextResponse.redirect(url, { status: 301 });
    }
  }

  // 301 Redirect /about-us to /about
  if (pathname === '/about-us' || pathname.startsWith('/about-us/')) {
    return NextResponse.redirect('https://www.itobyinfotech.com/about', { status: 301 });
  }

  // 301 Redirect /home to root homepage /
  if (pathname === '/home' || pathname.startsWith('/home/')) {
    return NextResponse.redirect('https://www.itobyinfotech.com/', { status: 301 });
  }

  // 301 Redirects for removed portfolio projects with relevant replacements
  const portfolioRedirects: Record<string, string> = {
    '/portfolio/luxe-fashion': '/portfolio/easy2buy',
    '/portfolio/b2b-saas': '/portfolio/lead-itoby',
  };

  const normalizedPath = pathname.replace(/\/$/, '');
  if (portfolioRedirects[normalizedPath]) {
    const url = request.nextUrl.clone();
    url.pathname = portfolioRedirects[normalizedPath];
    return NextResponse.redirect(url, { status: 301 });
  }

  // 410 Gone for removed fictional portfolio projects with no direct replacement
  const gonePortfolioSlugs = [
    '/portfolio/techflow',
    '/portfolio/fittrack',
    '/portfolio/quickpay',
    '/portfolio/restaurant-chain',
    '/portfolio/manufacturing-erp',
    '/portfolio/healthcare-portal',
    '/portfolio/law-firm-m365',
    '/portfolio/retail-m365',
    '/case-studies/techflow-saas',
  ];

  if (gonePortfolioSlugs.includes(normalizedPath)) {
    return new NextResponse(
      `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex, nofollow, noarchive">
  <title>410 Gone - Page Permanently Removed</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; background: #0a0a0f; color: #f1f1f5; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; text-align: center; padding: 1rem; box-sizing: border-box; }
    .container { max-width: 540px; padding: 2.5rem 2rem; border: 1px solid rgba(255,255,255,0.12); border-radius: 1.25rem; background: rgba(255,255,255,0.03); backdrop-filter: blur(10px); }
    h1 { font-size: 2.5rem; margin: 0 0 0.75rem; color: #a855f7; font-weight: 800; }
    p { color: #9ca3af; margin: 0 0 1.75rem; line-height: 1.6; font-size: 1rem; }
    a { display: inline-block; padding: 0.75rem 1.75rem; background: #9333ea; color: #ffffff; text-decoration: none; border-radius: 0.75rem; font-weight: 600; transition: background 0.2s; }
    a:hover { background: #7e22ce; }
  </style>
</head>
<body>
  <div class="container">
    <h1>410 Gone</h1>
    <p>This project page has been permanently removed and is no longer available as part of our verified portfolio audit.</p>
    <a href="/portfolio">Explore Verified Portfolio</a>
  </div>
</body>
</html>`,
      {
        status: 410,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'X-Robots-Tag': 'noindex, nofollow, noarchive',
        },
      }
    );
  }

  // If request hits non-www domain (itobyinfotech.com) or plain HTTP on primary domain
  if (host === 'itobyinfotech.com' || (host === 'www.itobyinfotech.com' && proto === 'http')) {
    const url = request.nextUrl.clone();
    url.protocol = 'https';
    url.host = 'www.itobyinfotech.com';
    url.port = '';
    return NextResponse.redirect(url, { status: 308 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for static files (_next/static, _next/image, favicon.ico, robots.txt, sitemap.xml, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
