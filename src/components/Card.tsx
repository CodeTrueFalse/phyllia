'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'outline';
  hover?: boolean;
  animation?: boolean;
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
  animation = false,
  onClick,
  style
}: CardProps) {
  const baseClass = 'card';
  const variantClass = variant !== 'default' ? `card-${variant}` : '';
  const hoverClass = hover ? 'card-hover' : '';
  const animationClass = animation ? 'card-animation' : '';
  const clickableClass = onClick ? 'card-clickable' : '';
  
  const combinedClassName = [
    baseClass,
    variantClass,
    hoverClass,
    animationClass,
    clickableClass,
    className
  ].filter(Boolean).join(' ');
  
  return (
    <div 
      className={combinedClassName}
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
  className = '',
  style
}: { 
  children: React.ReactNode; 
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`card-header ${className}`} style={style}>
      {children}
    </div>
  );
}

/**
 * Card Body component
 */
export function CardBody({ 
  children, 
  className = '',
  style
}: { 
  children: React.ReactNode; 
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`card-body ${className}`} style={style}>
      {children}
    </div>
  );
}

/**
 * Card Footer component
 */
export function CardFooter({ 
  children, 
  className = '',
  style
}: { 
  children: React.ReactNode; 
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`card-footer ${className}`} style={style}>
      {children}
    </div>
  );
} 