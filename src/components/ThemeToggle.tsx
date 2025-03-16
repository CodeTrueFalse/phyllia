'use client';

import { useState, useEffect } from 'react';
// CSS is now imported via main.css

export default function ThemeToggle() {
  // Initialize with system preference, but use localStorage if available
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  // On mount, check for saved theme preference or system preference
  useEffect(() => {
    // Check if we have a saved preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Otherwise use system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(systemPrefersDark);
    }
  }, []);

  // When theme changes, update document and save preference
  useEffect(() => {
    if (isDarkMode === null) return;

    const htmlElement = document.documentElement;
    
    if (isDarkMode) {
      htmlElement.classList.add('dark-theme');
      htmlElement.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.classList.add('light-theme');
      htmlElement.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Don't render until we've determined the initial state
  if (isDarkMode === null) return null;

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Show the icon for what you'll switch TO, not the current state */}
      {isDarkMode ? (
        <i className="fas fa-sun" aria-hidden="true"></i>
      ) : (
        <i className="fas fa-moon" aria-hidden="true"></i>
      )}
    </button>
  );
} 