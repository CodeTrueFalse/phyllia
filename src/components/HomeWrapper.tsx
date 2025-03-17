'use client';

import { useAuthRedirect } from '@/hooks/useAuthRedirect';
import { ReactNode } from 'react';

interface HomeWrapperProps {
  children: ReactNode;
}

export default function HomeWrapper({ children }: HomeWrapperProps) {
  // This hook will redirect authenticated users to the chat page
  useAuthRedirect();
  
  // Just render the children
  return <>{children}</>;
} 