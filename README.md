# Phyllia - IA 100% française et écoresponsable

<div align="center">
  <h3>Une intelligence artificielle alimentée par des énergies renouvelables</h3>
</div>

## À propos de Phyllia

Phyllia est une intelligence artificielle développée par TrueFalse, une entreprise française créée par une équipe d'étudiants passionnés. Notre objectif est de proposer une IA 100% française, souveraine et respectueuse de l'environnement, alimentée exclusivement par des énergies renouvelables.

## Notre mission

Nous croyons fermement que le développement technologique doit se faire en harmonie avec notre planète. C'est pourquoi Phyllia a été conçue dès sa création pour être écoresponsable, tout en garantissant la souveraineté numérique et la protection des données.

## Technologies utilisées

Ce site web a été développé avec :

- React.js - Framework JavaScript pour l'interface utilisateur
- React Router - Gestion des routes et navigation
- CSS Modules - Styles modulaires et organisés
- GitHub Pages - Hébergement et déploiement

## Structure du projet

```
phyllia/
├── public/               # Fichiers statiques
│   ├── images/           # Images du site
│   │   ├── team/         # Photos de l'équipe
│   │   └── about/        # Images pour la page À propos
│   ├── favicon.svg       # Favicon du site
│   └── index.html        # Page HTML principale
├── src/                  # Code source React
│   ├── components/       # Composants réutilisables
│   ├── data/             # Données configurables
│   ├── pages/            # Pages du site
│   ├── styles/           # Fichiers CSS
│   ├── App.js            # Composant principal App
│   ├── config.js         # Configuration globale
│   └── index.js          # Point d'entrée React
└── package.json          # Configuration NPM
```

## Guide d'utilisation

### Modifier le contenu du site

#### Équipe

Pour modifier les informations de l'équipe, modifiez le fichier `src/data/teamData.js`.

```javascript
// Exemple : Ajout d'un membre de l'équipe avec photo
{
  id: 7,
  name: 'Jean Dupont',
  role: 'Responsable Produit',
  bio: 'Spécialiste en gestion de produits technologiques avec 5 ans d\'expérience...',
  imageUrl: '/images/team/jean.jpg',
  socials: {
    linkedin: 'https://linkedin.com/in/jeandupont',
    twitter: 'https://twitter.com/jeandupont',
    github: 'https://github.com/jeandupont',
  }
}
```

#### Fonctionnalités

Pour modifier les fonctionnalités mises en avant, éditez le fichier `src/data/featureData.js`.

```javascript
// Exemple : Ajout d'une nouvelle fonctionnalité
{
  id: 5,
  icon: 'fa-shield-alt',
  title: 'Confidentialité garantie',
  description: 'Vos données sont protégées par les standards les plus stricts de sécurité et de confidentialité.'
}
```

#### Configuration globale

Pour modifier les paramètres globaux (liens sociaux, navigation, etc.), éditez le fichier `src/config.js`.

### Ajouter des images

Consultez le fichier `public/images/README.md` pour les instructions détaillées sur l'ajout d'images.

## Installation et développement

Pour installer et exécuter ce projet localement :

```bash
# Cloner le dépôt
git clone https://github.com/CodeTrueFalse/phyllia.git
cd phyllia

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm start
```

Le site sera accessible à l'adresse http://localhost:3000

## Déploiement

Pour déployer le site sur GitHub Pages :

```bash
npm run deploy
```

Cette commande construit le site et le déploie automatiquement sur la branche `gh-pages`.

## Personnalisation avancée

### Ajouter une nouvelle page

1. Créez un nouveau fichier dans `src/pages/`, par exemple `ContactPage.js`
2. Ajoutez la route dans `src/App.js`
3. Ajoutez le lien dans la navigation (`src/config.js`)

### Modifier le style

Les styles sont organisés par composant/page. Pour modifier un style :

1. Trouvez le fichier CSS correspondant dans `src/styles/`
2. Modifiez les règles CSS selon vos besoins

## Licence

Tous droits réservés © TrueFalse
