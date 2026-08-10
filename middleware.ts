import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const proto = request.headers.get('x-forwarded-proto') || 'https';

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
     * Match all request paths except for static files (_next/static, _next/image, favicon.ico, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
