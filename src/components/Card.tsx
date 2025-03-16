'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'outline';
  hover?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

/**
 * Reusable Card component with various style variants
 */
export default function Card({
  children,
  className = '',
  variant = 'default',
  hover = true,
  onClick,
  style
}: CardProps) {
  const classes = [
    'card',
    variant !== 'default' ? `card-${variant}` : '',
    hover ? 'card-hover' : '',
    onClick ? 'card-clickable' : '',
    className
  ].filter(Boolean).join(' ');
  
  return (
    <div 
      className={classes}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      style={style}
    >
      {children}
    </div>
  );
}

/**
 * Card Header component
 */
export function CardHeader({ 
  children, 
  className = ''
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <div className={`card-header ${className}`}>
      {children}
    </div>
  );
}

/**
 * Card Body component
 */
export function CardBody({ 
  children, 
  className = ''
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <div className={`card-body ${className}`}>
      {children}
    </div>
  );
}

/**
 * Card Footer component
 */
export function CardFooter({ 
  children, 
  className = ''
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <div className={`card-footer ${className}`}>
      {children}
    </div>
  );
} 