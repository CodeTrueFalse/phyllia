import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>À propos de Phyllia</h1>
          <p className="lead">Une intelligence artificielle française engagée dans le développement durable</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <div className="section-header text-center">
            <h2>Notre mission</h2>
            <p>Créer une IA éthique, souveraine et respectueuse de l'environnement</p>
          </div>
          <div className="mission-content">
            <div className="mission-text">
              <p>
                Chez TrueFalse, nous croyons fermement que le développement technologique doit se faire en harmonie avec notre planète. 
                C'est pourquoi nous avons créé Phyllia, une intelligence artificielle conçue dès sa conception pour être alimentée 
                exclusivement par des énergies renouvelables.
              </p>
              <p>
                Notre mission est de prouver qu'il est possible de développer des technologies avancées tout en respectant 
                notre environnement. Phyllia représente notre engagement à proposer des solutions numériques innovantes 
                qui ne compromettent pas l'avenir de notre planète.
              </p>
              <p>
                En tant qu'entreprise française, nous mettons également un point d'honneur à garantir la souveraineté numérique 
                et la protection des données. Toutes nos infrastructures sont hébergées en France, assurant ainsi un contrôle 
                total sur les données traitées.
              </p>
            </div>
            <div className="mission-image">
              <div className="placeholder-image-square">
                {/* Image placeholder for mission */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="technical">
        <div className="container">
          <div className="section-header text-center">
            <h2>Notre technologie</h2>
            <p>Une infrastructure optimisée pour les énergies renouvelables</p>
          </div>
          <div className="technical-content">
            <div className="technical-image">
              <div className="placeholder-image-square">
                {/* Image placeholder for technology */}
              </div>
            </div>
            <div className="technical-text">
              <h3>Infrastructure écoresponsable</h3>
              <p>
                Nos serveurs sont alimentés à 100% par des sources d'énergie renouvelable : 
                éolienne, solaire et hydraulique. Cette approche nous permet de réduire 
                drastiquement l'empreinte carbone associée à nos services d'intelligence artificielle.
              </p>
              
              <h3>Algorithmes optimisés</h3>
              <p>
                Nous avons développé des algorithmes spécifiquement conçus pour minimiser la 
                consommation énergétique tout en maximisant les performances. Cette optimisation 
                nous permet d'offrir un service efficace avec un impact environnemental réduit.
              </p>
              
              <h3>Hébergement français</h3>
              <p>
                Toutes nos infrastructures sont hébergées en France, assurant ainsi la souveraineté 
                de nos données et le respect des normes européennes en matière de protection des données.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <div className="section-header text-center">
            <h2>Nos valeurs</h2>
            <p>L'éthique au cœur de notre démarche</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <h3>Durabilité</h3>
              <p>Nous nous engageons à développer des solutions numériques qui préservent les ressources de notre planète</p>
            </div>
            <div className="value-card">
              <h3>Souveraineté</h3>
              <p>Nous défendons l'indépendance technologique de la France et de l'Europe dans le domaine de l'IA</p>
            </div>
            <div className="value-card">
              <h3>Transparence</h3>
              <p>Nous croyons en la transparence dans nos processus et nos décisions pour établir une relation de confiance</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>Nous repoussons constamment les limites technologiques pour créer des solutions d'IA toujours plus performantes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 