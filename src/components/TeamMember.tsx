'use client';

import { MemberData } from '@/data/teamData';
import '@/app/styles/TeamMember.css';

interface TeamMemberProps {
  member: MemberData;
  index: number;
}

export default function TeamMember({ member, index }: TeamMemberProps) {
  const { name, role, bio, imageUrl, socials, email } = member;
  
  // Get initials for the placeholder
  const getInitials = (name: string): string => 
    name.split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();

  // Render social media link if available
  function SocialLink({ url, icon, label }: { url?: string, icon: string, label: string }) {
    if (!url) return null;
    
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
        <i className={`fab ${icon}`}></i>
      </a>
    );
  }

  // Calculate profile class based on index
  const profileClass = `placeholder-profile member${(index % 6) + 1}`;

  return (
    <div className="team-card">
      <div className="team-member-image">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="member-image" />
        ) : (
          <div className={profileClass}>
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
          <SocialLink url={socials?.linkedin} icon="fa-linkedin" label="LinkedIn" />
          <SocialLink url={socials?.twitter} icon="fa-twitter" label="Twitter" />
          <SocialLink url={socials?.github} icon="fa-github" label="GitHub" />
          <SocialLink url={socials?.website} icon="fa-link" label="Website" />
        </div>
      </div>
    </div>
  );
} 