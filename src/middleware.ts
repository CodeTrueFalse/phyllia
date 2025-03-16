import { NextRequest, NextResponse } from 'next/server';
import { stackServerApp } from './stack';

export async function middleware(request: NextRequest) {
  // Only protect the /chat route
  if (request.nextUrl.pathname.startsWith('/chat')) {
    const user = await stackServerApp.getUser();
    
    // If no user is found, redirect to sign in
    if (!user) {
      const signInUrl = new URL('/handler/signin', request.url);
      signInUrl.searchParams.set('redirect_url', request.nextUrl.pathname);
      return NextResponse.redirect(signInUrl);
    }
  }
  
  return NextResponse.next();
} 