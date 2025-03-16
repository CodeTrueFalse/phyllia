'use client';

import Link from 'next/link';
import config from '@/config';

interface SocialLinkProps {
  url: string | null;
  icon: string;
  label: string;
}

function SocialLink({ url, icon, label }: SocialLinkProps) {
  if (!url) return null;
  
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <i className={`fab ${icon}`}></i>
    </a>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { siteName, companyName, contact, social, navigation } = config;
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          {/* Left Column - Brand */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <h3>{siteName}</h3>
            </Link>
            <p>IA 100% française alimentée par des énergies renouvelables. Nous mettons l'éthique et la souveraineté numérique au cœur de notre démarche.</p>
            
            {contact.email && (
              <a href={`mailto:${contact.email}`} className="footer-email">
                <i className="fas fa-envelope"></i>
                <span>{contact.email}</span>
              </a>
            )}
            
            <div className="social-links">
              <SocialLink url={social.github} icon="fa-github" label="GitHub" />
              <SocialLink url={social.twitter} icon="fa-twitter" label="Twitter" />
              <SocialLink url={social.linkedin} icon="fa-linkedin" label="LinkedIn" />
              {social.instagram && (
                <SocialLink url={social.instagram} icon="fa-instagram" label="Instagram" />
              )}
            </div>
          </div>
          
          {/* Right Column - Navigation */}
          <div className="footer-nav-columns">
            {/* Navigation Links */}
            <div className="footer-nav-column">
              <h4>Navigation</h4>
              <ul>
                {navigation.map((item) => (
                  <li key={item.path}>
                    <Link href={item.path}>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} <a href="https://truefalse.fr" target="_blank" rel="noopener noreferrer">{companyName}</a>. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
} 