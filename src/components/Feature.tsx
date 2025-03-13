'use client';

import { Feature as FeatureType } from '@/data/featureData';
import '@/app/styles/Feature.css';

type FeatureProps = Omit<FeatureType, 'id'> & {
  index?: number;
};

export default function Feature({ icon, title, description, index = 0 }: FeatureProps) {
  return (
    <div className="feature-card" style={{ '--item-index': index } as React.CSSProperties}>
      <div className="feature-icon">
        <i className={`fas ${icon}`}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
} 