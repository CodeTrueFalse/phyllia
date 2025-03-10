import React from 'react';
import PropTypes from 'prop-types';
import '../styles/TeamMember.css';

/**
 * TeamMember component for displaying individual team members
 * 
 * @param {Object} props - Component props
 * @param {Object} props.member - Member data object
 * @returns {JSX.Element}
 */
const TeamMember = ({ member }) => {
  const { name, role, bio, imageUrl, socials, email } = member;
  
  // Get initials for the placeholder
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="team-card">
      <div className="team-member-image">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="member-image" />
        ) : (
          <div className="placeholder-profile">
            <span className="member-initials">{getInitials(name)}</span>
          </div>
        )}
      </div>
      <div className="team-member-info">
        <h3>{name}</h3>
        <h4>{role}</h4>
        {bio && <p>{bio}</p>}
        
        {email && (
          <div className="team-email">
            <a href={`mailto:${email}`}>
              <i className="fas fa-envelope"></i> {email}
            </a>
          </div>
        )}
        
        <div className="team-social">
          {socials?.linkedin && (
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          )}
          {socials?.twitter && (
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          )}
          {socials?.github && (
            <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          )}
          {socials?.website && (
            <a href={socials.website} target="_blank" rel="noopener noreferrer" aria-label="Website">
              <i className="fas fa-link"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

TeamMember.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    bio: PropTypes.string,
    imageUrl: PropTypes.string,
    email: PropTypes.string,
    socials: PropTypes.shape({
      linkedin: PropTypes.string,
      twitter: PropTypes.string,
      github: PropTypes.string,
      website: PropTypes.string,
    }),
  }).isRequired,
};

export default TeamMember; 