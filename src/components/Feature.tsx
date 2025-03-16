'use client';

import { Feature as FeatureType } from '@/data/featureData';
import Card, { CardBody } from './Card';
import { useEffect, useState } from 'react';
// No need to import CSS here as it's imported via main.css

type FeatureProps = Omit<FeatureType, 'id'> & {
  index?: number;
};

export default function Feature({ icon, title, description, index = 0 }: FeatureProps) {
  // Calculate transition delay based on index
  const transitionDelay = `${index * 0.1}s`;
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Add a small delay before showing the card to enable animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Card 
      className={`feature-card ${isVisible ? 'is-visible' : ''}`}
      hover={true} 
      animation={true}
      style={{ 
        transitionDelay,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      <CardBody>
        <div className="card-icon">
          <i className={`fas ${icon}`}></i>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </CardBody>
    </Card>
  );
} 