/**
 * Global configuration for the Phyllia website
 * 
 * This file contains site-wide settings and configurations.
 * Update this file to change global settings like social links,
 * contact information, etc.
 */

interface NavigationItem {
  name: string;
  path: string;
}

interface ContactInfo {
  email: string | null;
  phone: string | null;
  address: string | null;
}

interface SocialLinks {
  github: string | null;
  twitter: string | null;
  linkedin: string | null;
  instagram: string | null;
}

interface Images {
  logo: string | null;
  hero: string | null;
  about: string | null;
  og: string | null;
}

interface SiteConfig {
  siteName: string;
  siteTagline: string;
  siteDescription: string;
  companyName: string;
  companyFoundedYear: number;
  contact: ContactInfo;
  social: SocialLinks;
  navigation: NavigationItem[];
  images: Images;
}

const config: SiteConfig = {
  // Site information
  siteName: 'Phyllia',
  siteTagline: 'IA 100% française et écoresponsable',
  siteDescription: 'Phyllia - IA 100% française alimentée par des énergies renouvelables, développée par TrueFalse.',
  companyName: 'TrueFalse',
  companyFoundedYear: 2023,
  
  // Contact information
  contact: {
    email: 'contact@truefalse.fr',
    phone: null, // Add when available: '+33 1 23 45 67 89'
    address: null, // Add when available: '123 Rue de l\'Innovation, 75001 Paris, France'
  },
  
  // Social media links
  social: {
    github: 'https://github.com/codetruefalse',
    twitter: null, // Add when available: 'https://twitter.com/phyllia_ai'
    linkedin: null, // Add when available: 'https://linkedin.com/company/truefalse'
    instagram: null, // Add when available: 'https://instagram.com/phyllia_ai'
  },
  
  // Main navigation links
  navigation: [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Équipe', path: '/team' },
    { name: 'Chat', path: '/chat' },
  ],
  
  // Images paths
  images: {
    logo: '/images/logo.svg', // Replace with actual logo path when available
    hero: '/images/hero.jpg', // Replace with actual hero image path when available
    about: '/images/about.jpg', // Replace with actual about image path when available
    og: '/images/og-image.jpg', // Open Graph image for social sharing
  }
};

export default config; 