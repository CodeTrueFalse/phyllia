/**
 * Team members data
 * 
 * This file contains information about team members.
 * Update this file to add, remove, or modify team members.
 * 
 * Image path should be relative to the public folder:
 * For example: '/images/team/member1.jpg'
 * 
 * If no image is provided, a placeholder with the member's initials will be shown.
 */

interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  github?: string;
  website?: string;
}

export interface MemberData {
  id: string | number;
  name: string;
  role: string;
  bio?: string;
  imageUrl?: string | null;
  email?: string;
  socials?: SocialLinks;
}

const teamMembers: MemberData[] = [
  {
    id: 1,
    name: 'Hugo Sibony',
    role: 'Co-Fondateur, Président & CTO',
    bio: 'Direction stratégique et technique de TrueFalse.',
    imageUrl: '/images/team/hugo_sibony.jpg', // Add image to this path
    socials: {
      linkedin: 'https://linkedin.com/in/hsibony',
      github: 'https://github.com/kazetachinuu',
      website: 'https://hugosibony.com'
    },
    email: 'hugo.sibony@truefalse.fr'
  },
  {
    id: 2,
    name: 'Maxence Leclercq',
    role: 'Co-Fondateur & Directeur Général',
    bio: 'Gestion des opérations et croissance de l\'entreprise.',
    imageUrl: '/images/team/maxence_leclercq.jpg', // Add image to this path
    socials: {
      linkedin: 'https://www.linkedin.com/in/maxence-leclercq-94195b222/',
      github: 'https://github.com/Cargaison'
    },
    email: 'maxence.leclercq@truefalse.fr'
  },
  {
    id: 3,
    name: 'Ilyes Benahmed',
    role: 'Directeur Commercial',
    bio: 'Stratégie commerciale et développement partenariats.',
    imageUrl: '/images/team/ilyes_benahmed.png', // Add image to this path
    socials: {
      linkedin: 'https://www.linkedin.com/in/ilyes-benahmed/'
    },
    email: 'ilyes.benahmed@truefalse.fr'
  },
  {
    id: 4,
    name: 'Tanguy Libert',
    role: 'Directeur des Opérations',
    bio: 'Coordination des processus opérationnels.',
    imageUrl: '/images/team/tanguy_libert.jpg', // Add image to this path
    socials: {
      linkedin: 'https://www.linkedin.com/in/tanguy-libert-157653221/'
    },
    email: 'tanguy.libert@truefalse.fr'
  },
  {
    id: 5,
    name: 'Rémy Le Bohec',
    role: 'Responsable Cybersécurité',
    bio: '',
    imageUrl: null, // Add image path when available: '/images/team/remy_lebohec.jpg'
    socials: {
      linkedin: 'https://www.linkedin.com/in/rémy-le-bohec/'
    },
    email: 'remy.le-bohec@epita.fr'
  },
  {
    id: 6,
    name: 'Godwin Kanlinsou',
    role: 'Développeur',
    bio: '',
    imageUrl: '/images/team/godwin_kanlinsou.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/godwin-kanlinsou/'
    },
    email: 'godwin.kanlinsou@truefalse.fr'
  }
];

export default teamMembers; 