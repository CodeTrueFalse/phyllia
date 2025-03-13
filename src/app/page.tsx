import Link from 'next/link';
import Feature from '@/components/Feature';
import features from '@/data/featureData';
import './styles/Home.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Phyllia</h1>
            <h2>L'intelligence artificielle 100% française et écoresponsable</h2>
            <p>
              Développée par TrueFalse, Phyllia est une IA innovante alimentée exclusivement 
              par des énergies renouvelables. Nous mettons l'éthique et la souveraineté 
              numérique au cœur de notre démarche.
            </p>
            <div className="hero-buttons">
              <Link href="/about" className="btn btn-primary">Découvrir Phyllia</Link>
              <Link href="/team" className="btn btn-secondary">Notre équipe</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="placeholder-image">
              <div className="circle-animation">
                <div className="particle"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#F5F4F0" fillOpacity="1" d="M0,160L60,138.7C120,117,240,75,360,74.7C480,75,600,117,720,149.3C840,181,960,203,1080,181.3C1200,160,1320,96,1380,64L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header text-center">
            <h2>Pourquoi choisir Phyllia ?</h2>
            <p>Découvrez les avantages de notre intelligence artificielle écoresponsable</p>
          </div>
          
          <div className="features-grid">
            {features.map(({ id, icon, title, description }, index) => (
              <Feature 
                key={id}
                icon={icon}
                title={title}
                description={description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="container text-center">
          <h2>Prêt à découvrir Phyllia ?</h2>
          <p>Rejoignez-nous dans cette aventure innovante et écoresponsable</p>
          <Link href="/about" className="btn btn-primary">En savoir plus</Link>
        </div>
        <div className="decorative-circle"></div>
        <div className="decorative-circle"></div>
      </section>
    </>
  );
}
