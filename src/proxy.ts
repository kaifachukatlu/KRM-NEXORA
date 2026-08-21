import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(req: NextRequest) {
  const url = req.nextUrl;

  // Protect the admin dashboard route
  if (url.pathname.startsWith('/dashboard/admin')) {
    const basicAuth = req.headers.get('authorization');

    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      const [user, pwd] = atob(authValue).split(':');

      // Uses environment variables for security, with a secure fallback for local testing
      const validUser = process.env.ADMIN_USERNAME || 'KRM';
      const validPwd = process.env.ADMIN_PASSWORD || 'KRM';

      if (user === validUser && pwd === validPwd) {
        return NextResponse.next();
      }
    }

    // If auth fails or is not provided, trigger a browser login popup
    return new NextResponse('Authentication Required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Admin Area"',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/admin/:path*'],
};
