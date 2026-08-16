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
