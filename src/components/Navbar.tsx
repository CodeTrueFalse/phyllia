'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import config from '@/config';
// CSS is now imported via main.css

/**
 * Modern Navbar component
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  // No need to filter navigation items anymore
  const navigationItems = config.navigation;

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link href="/" className="navbar-logo">
          {config.images.logo ? (
            <img src={config.images.logo} alt={config.siteName} className="logo-image" />
          ) : (
            <span className="logo-text">{config.siteName}</span>
          )}
        </Link>

        <ul className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
          {navigationItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link 
                href={item.path}
                className={`nav-link ${pathname === item.path ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
                aria-current={pathname === item.path ? 'page' : undefined}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <ThemeToggle />
          
          <button 
            className={`mobile-toggle ${isMenuOpen ? 'active' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
} 