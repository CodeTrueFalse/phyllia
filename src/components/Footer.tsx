'use client';

import Link from 'next/link';
import config from '@/config';
import '@/app/styles/Footer.css';

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
      <div className="container footer-container">
        <div className="footer-brand">
          <h3>{siteName}</h3>
          <p>IA 100% française alimentée par des énergies renouvelables</p>
          {contact.email && (
            <p className="footer-contact">
              <a href={`mailto:${contact.email}`}>
                <i className="fas fa-envelope"></i> {contact.email}
              </a>
            </p>
          )}
        </div>
        
        <div className="footer-links">
          <div className="footer-links-column">
            <h4>Navigation</h4>
            <ul>
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-links-column">
            <h4>Suivez-nous</h4>
            <div className="social-links">
              <SocialLink url={social.github} icon="fa-github" label="GitHub" />
              <SocialLink url={social.twitter} icon="fa-twitter" label="Twitter" />
              <SocialLink url={social.linkedin} icon="fa-linkedin" label="LinkedIn" />
              <SocialLink url={social.instagram} icon="fa-instagram" label="Instagram" />
            </div>
            <p className="mt-md">Restez informés de nos dernières actualités et suivez notre évolution.</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} <a href="https://truefalse.fr" target="_blank" rel="noopener noreferrer">{companyName}</a>. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
} 