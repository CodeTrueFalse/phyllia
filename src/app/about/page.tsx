import '../styles/About.css';

export const metadata = {
  title: 'À propos',
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
            </div>
            <div className="mission-image">
              <div className="placeholder-image-square">
                {/* We'll add an appropriate image here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <div className="section-header text-center">
            <h2>Nos valeurs</h2>
            <p>Les principes qui guident le développement de Phyllia</p>
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
              icon="fa-brain" 
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
    </>
  );
} 