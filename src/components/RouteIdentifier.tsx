'use client';

import { useEffect } from 'react';

interface RouteIdentifierProps {
  route: string;
}

/**
 * Component that sets a data-route attribute on the body element
 * Used for page-specific styling
 */
export default function RouteIdentifier({ route }: RouteIdentifierProps) {
  useEffect(() => {
    // Set the data-route attribute when component mounts
    document.body.setAttribute('data-route', route);
    
    // Cleanup function to remove the attribute when component unmounts
    return () => {
      document.body.removeAttribute('data-route');
    };
  }, [route]);
  
  // This component doesn't render anything
  return null;
} 