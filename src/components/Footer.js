import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import config from '../config';

/**
 * Footer component for the site
 * @returns {JSX.Element}
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3>{config.siteName}</h3>
          <p>IA 100% française alimentée par des énergies renouvelables</p>
          {config.contact.email && (
            <p className="footer-contact">
              <a href={`mailto:${config.contact.email}`}>
                <i className="fas fa-envelope"></i> {config.contact.email}
              </a>
            </p>
          )}
        </div>
        
        <div className="footer-links">
          <div className="footer-links-column">
            <h4>Navigation</h4>
            <ul>
              {config.navigation.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-links-column">
            <h4>Suivez-nous</h4>
            <div className="social-links">
              {config.social.github && (
                <a href={config.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
              )}
              {config.social.twitter && (
                <a href={config.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              )}
              {config.social.linkedin && (
                <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
              )}
              {config.social.instagram && (
                <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} <a href="https://truefalse.fr" target="_blank" rel="noopener noreferrer">{config.companyName}</a>. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 