/**
 * Features data for Phyllia
 */

export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: 'fa-leaf',
    title: '100% Écoresponsable',
    description: 'Alimentée exclusivement par des énergies renouvelables, Phyllia réduit l\'empreinte carbone du numérique.'
  },
  {
    id: 2,
    icon: 'fa-flag',
    title: '100% Française',
    description: 'Conçue et développée en France, Phyllia garantit la souveraineté numérique et la protection des données.'
  },
  {
    id: 3,
    icon: 'fa-brain',
    title: 'Intelligence innovante',
    description: 'Notre IA utilise des algorithmes avancés pour répondre précisément à vos besoins spécifiques.'
  },
  {
    id: 4,
    icon: 'fa-lock',
    title: 'Sécurité maximale',
    description: 'Nous accordons une importance capitale à la protection et à la confidentialité de vos données.'
  }
];

export default features; 