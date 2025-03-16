// No need to import CSS here as it's already imported via main.css
import TeamMember from '@/components/TeamMember';
import teamMembers from '@/data/teamData';
import Link from 'next/link';

export const metadata = {
  title: 'Notre équipe | Phyllia - IA française écoresponsable',
  description: 'Découvrez l\'équipe derrière Phyllia, une intelligence artificielle française engagée dans le développement durable et la souveraineté numérique.',
};

/**
 * Team page component
 * @returns {JSX.Element}
 */
export default function Team() {
  return (
    <>
      {/* Team Hero Section */}
      <section className="team-hero-section">
        <div className="container">
          <div className="team-hero-content">
            <h1 className="team-hero-title">Notre équipe</h1>
            <p className="team-hero-subtitle">Les talents derrière Phyllia, l'IA 100% française et renouvelable</p>
          </div>
        </div>
        <div className="wave-green-to-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" preserveAspectRatio="none">
            <path d="M0,0 C240,135 480,160 720,120 C960,80 1200,60 1440,120 L1440,160 L0,160 Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="team-members-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Une équipe passionnée</h2>
            <p className="section-subtitle">Rencontrez les experts qui donnent vie à Phyllia</p>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={member.id} 
                member={member} 
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values Statement */}
      <section className="team-values-section">
        <div className="container">
          <div className="values-statement">
            <h2>Notre engagement</h2>
            <p>
              Chez <strong>TrueFalse</strong>, nous sommes unis par des valeurs communes : l'innovation responsable, le respect de l'environnement 
              et la défense de la souveraineté numérique française. Chaque membre de notre équipe apporte son expertise et sa passion 
              pour créer <strong>Phyllia</strong>, une IA qui incarne ces valeurs fondamentales.
            </p>
            <p>
              Notre équipe pluridisciplinaire combine des compétences en intelligence artificielle, 
              en développement durable, en informatique et en gestion de projet pour relever les défis 
              technologiques actuels tout en préparant un avenir plus respectueux de notre planète.
            </p>
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="join-team-section">
        <div className="container">
          <div className="join-team-content">
            <h2 className="join-team-title">Rejoignez notre équipe</h2>
            <p className="join-team-description">
              Vous partagez notre vision d'une IA éthique et écoresponsable ? Nous sommes toujours à la recherche de talents passionnés pour nous aider à construire l'avenir de l'intelligence artificielle.
            </p>
            <div className="join-team-buttons">
              <Link href="/careers" className="btn btn-primary">Voir nos offres</Link>
              <Link href="/contact" className="btn btn-secondary">Nous contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 