import { stackServerApp } from '@/middleware';
import AccountAccess from '@/components/AccountAccess';
import RouteIdentifier from '@/components/RouteIdentifier';
import './page-styles.css'; // Import CSS to hide footer

export const metadata = {
  title: 'Version Bêta Privée | Phyllia',
  description: 'Phyllia est actuellement en version bêta privée. Rejoignez notre liste d\'attente pour y accéder.',
};

export default async function ChatPage() {
  const user = await stackServerApp.getUser();
  
  if (!user) {
    return null; // This should be handled by middleware, but just in case
  }

  const displayName = user.displayName || user.primaryEmail?.split('@')[0] || 'there';

  return (
    <main className="container">
      <RouteIdentifier route="/chat" />
      <div className="chat-container">
        <div className="private-beta-content">
          <div className="beta-badge">Version Bêta Privée</div>
          <h1>Bienvenue sur Phyllia</h1>
          <p className="welcome-message">Bonjour, {displayName} !</p>
          <p className="beta-message">
            Merci de votre intérêt pour Phyllia. Nous sommes actuellement en version bêta privée.
            L'accès complet à notre interface de chat sera bientôt disponible.
          </p>
          <div className="divider"></div>
          <AccountAccess />
        </div>
      </div>
    </main>
  );
} 