'use client';

import { useUser } from '@stackframe/stack';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Simple flag to prevent multiple redirects
let hasRedirected = false;

/**
 * Hook to redirect users after login to the chat page
 * Allows users to manually visit the homepage if they choose
 */
export function useAuthRedirect() {
  const user = useUser();
  const router = useRouter();
  const pathname = usePathname();
  
  useEffect(() => {
    // Only redirect on first render when user is logged in and on homepage
    if (user && pathname === '/' && !hasRedirected) {
      hasRedirected = true;
      router.push('/chat');
    }
  }, [user, pathname, router]);
} 