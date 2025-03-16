'use client';

import { MemberData } from '@/data/teamData';
// CSS is now imported via main.css

interface TeamMemberProps {
  member: MemberData;
  index: number;
}

// Extracted SocialLink component
function SocialLink({ url, icon, label, prefix = 'fab' }: { url?: string, icon: string, label: string, prefix?: string }) {
  if (!url) return null;
  
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <i className={`${prefix} ${icon}`}></i>
    </a>
  );
}

export default function TeamMember({ member, index }: TeamMemberProps) {
  const { name, role, bio, imageUrl, socials, email } = member;
  
  // Get initials for the placeholder
  const getInitials = (name: string): string => 
    name.split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();

  // Calculate profile class based on index
  const profileClass = `placeholder-profile member${(index % 6) + 1}`;

  return (
    <div className="team-member">
      {imageUrl ? (
        <img src={imageUrl} alt={name} className="team-member-image" />
      ) : (
        <div className={profileClass}>
          <span className="member-initials">{getInitials(name)}</span>
        </div>
      )}
      <div className="team-member-content">
        <h3 className="team-member-name">{name}</h3>
        <h4 className="team-member-title">{role}</h4>
        {bio && <p className="team-member-bio">{bio}</p>}
        
        {email && (
          <div className="team-member-email">
            <a href={`mailto:${email}`}>
              <i className="fas fa-envelope"></i> {email}
            </a>
          </div>
        )}
        
        <div className="team-member-social">
          <SocialLink url={socials?.linkedin} icon="fa-linkedin" label="LinkedIn" />
          <SocialLink url={socials?.twitter} icon="fa-twitter" label="Twitter" />
          <SocialLink url={socials?.github} icon="fa-github" label="GitHub" />
          <SocialLink url={socials?.website} icon="fa-globe" label="Website" prefix="fas" />
        </div>
      </div>
    </div>
  );
} 