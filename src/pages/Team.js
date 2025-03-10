import React from 'react';
import '../styles/Team.css';
import TeamMember from '../components/TeamMember';
import teamMembers from '../data/teamData';

/**
 * Team page component
 * @returns {JSX.Element}
 */
const Team = () => {
  return (
    <div className="team-page">
      {/* Team Hero Section */}
      <section className="team-hero">
        <div className="container">
          <h1>Notre équipe</h1>
          <p className="lead">Les talents derrière Phyllia, l'IA 100% française et renouvelable</p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="team-members">
        <div className="container">
          <div className="section-header text-center">
            <h2>Une équipe passionnée</h2>
            <p>Rencontrez les experts qui donnent vie à Phyllia</p>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Statement */}
      <section className="team-values">
        <div className="container">
          <div className="values-statement">
            <h2>Notre engagement</h2>
            <p>
              Chez TrueFalse, nous sommes unis par des valeurs communes : l'innovation responsable, le respect de l'environnement 
              et la défense de la souveraineté numérique française. Chaque membre de notre équipe apporte son expertise et sa passion 
              pour créer Phyllia, une IA qui incarne ces valeurs fondamentales.
            </p>
            <p>
              Notre équipe pluridisciplinaire combine des compétences en intelligence artificielle, 
              en développement durable, en informatique et en gestion de projet pour relever les défis 
              technologiques actuels tout en préparant un avenir plus respectueux de notre planète.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team; 