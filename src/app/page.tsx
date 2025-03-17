import Link from 'next/link';
import Feature from '@/components/Feature';
import features from '@/data/featureData';
import Card, { CardBody } from '@/components/Card';
import HomeWrapper from '@/components/HomeWrapper';

export default function Home() {
  return (
    <HomeWrapper>
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
        <div className="wave-green-to-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" preserveAspectRatio="none">
            <path d="M0,0 C240,135 480,160 720,120 C960,80 1200,60 1440,120 L1440,160 L0,160 Z" className="shape-fill"></path>
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
          
          <div className="card-grid">
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
    </HomeWrapper>
  );
}
