'use client';

import { Feature as FeatureType } from '@/data/featureData';
import Card, { CardBody } from './Card';

type FeatureProps = Omit<FeatureType, 'id'> & {
  index?: number;
};

export default function Feature({ icon, title, description, index = 0 }: FeatureProps) {
  return (
    <Card 
      className="feature-card"
      hover={true}
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