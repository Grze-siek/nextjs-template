import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/underConstruction', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/features',
    '/news',
    '/careers',
    '/partner_with_us',
    '/blog',
    '/article',
    '/product/new_arrival',
    '/product/discount',
    '/product/customize',
  ],
};
