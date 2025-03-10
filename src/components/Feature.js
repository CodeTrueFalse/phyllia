import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Feature.css';

/**
 * Feature component for displaying a feature card
 * 
 * @param {Object} props - Component props
 * @param {string} props.icon - Font Awesome icon class (e.g., 'fa-leaf')
 * @param {string} props.title - Feature title
 * @param {string} props.description - Feature description
 * @returns {JSX.Element}
 */
const Feature = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        <i className={`fas ${icon}`}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

Feature.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Feature; 