// No need to import CSS here as it's already imported via main.css
import Image from 'next/image';

export const metadata = {
  title: 'À propos | Phyllia - IA française écoresponsable',
  description: 'Découvrez Phyllia, une intelligence artificielle française engagée dans le développement durable et la souveraineté numérique.',
};

interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="value-card">
      <div className="value-icon">
        <i className={`fas ${icon}`}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero">
            <div className="about-hero-content">
              <h1 className="about-hero-title">À propos de Phyllia</h1>
              <p className="about-hero-subtitle">Une intelligence artificielle française engagée dans le développement durable</p>
              <p className="about-hero-description">
                Phyllia est née de notre conviction que l'innovation technologique peut et doit être compatible avec 
                la préservation de notre environnement. Découvrez notre histoire, nos valeurs et notre vision pour 
                une IA éthique et responsable.
              </p>
            </div>
            <div className="about-hero-image">
              <div className="about-image-container">
                <div className="about-image-decoration"></div>
                <div className="about-image-placeholder">
                  <div className="about-image-circle">
                    <div className="about-image-particle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wave-green-to-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" preserveAspectRatio="none">
            <path d="M0,0 C240,135 480,160 720,120 C960,80 1200,60 1440,120 L1440,160 L0,160 Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="mission-title">Notre mission</h2>
            <p className="section-subtitle">Créer une IA éthique, souveraine et respectueuse de l'environnement</p>
          </div>
          <div className="mission-content">
            <div className="mission-text">
              <p>
                Chez <strong>TrueFalse</strong>, nous croyons fermement que le développement technologique doit se faire en harmonie avec notre planète. 
                C'est pourquoi nous avons créé <strong>Phyllia</strong>, une intelligence artificielle conçue dès sa conception pour être alimentée 
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
              <div className="mission-stats">
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Énergies renouvelables</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">0</span>
                  <span className="stat-label">Empreinte carbone</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Hébergement français</span>
                </div>
              </div>
            </div>
            <div className="mission-image">
              <div className="mission-image-container">
                <div className="mission-image-decoration"></div>
                <div className="mission-image-placeholder">
                  <i className="fas fa-leaf mission-icon-primary"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="values-title">Nos valeurs</h2>
            <p className="section-subtitle">Les principes qui guident le développement de Phyllia</p>
          </div>
          <div className="values-grid">
            <ValueCard 
              icon="fa-leaf" 
              title="Écologie" 
              description="Nous utilisons exclusivement des énergies renouvelables pour alimenter nos infrastructures."
            />
            <ValueCard 
              icon="fa-shield-alt" 
              title="Souveraineté" 
              description="100% française, Phyllia garantit une indépendance totale et le respect des données."
            />
            <ValueCard 
              icon="fa-lightbulb" 
              title="Innovation" 
              description="Nous repoussons les limites de l'IA tout en maintenant notre engagement environnemental."
            />
            <ValueCard 
              icon="fa-balance-scale" 
              title="Éthique" 
              description="Le développement et l'utilisation de notre IA respectent des principes éthiques stricts."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="container text-center">
          <h2 className="about-cta-title">Prêt à découvrir Phyllia ?</h2>
          <p className="about-cta-description">
            Rejoignez-nous dans cette aventure pour une technologie plus responsable et éthique.
          </p>
          <div className="about-cta-buttons">
            <a href="/contact" className="btn btn-primary">Nous contacter</a>
            <a href="/team" className="btn btn-secondary">Découvrir notre équipe</a>
          </div>
        </div>
      </section>
    </>
  );
} 