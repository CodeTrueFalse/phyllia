import { stackServerApp } from '@/middleware';
import ChatInterface from '@/components/ChatInterface';

export const metadata = {
  title: 'Chat with Phyllia | Phyllia',
  description: 'Chat with Phyllia, our AI assistant designed to help you with your questions and tasks.',
};

export default async function ChatPage() {
  const user = await stackServerApp.getUser();
  
  if (!user) {
    return null; // This should be handled by middleware, but just in case
  }

  const displayName = user.displayName || user.primaryEmail?.split('@')[0] || 'there';

  return (
    <main className="container">
      <div className="chat-container">
        <div className="chat-header">
          <h1>Chat with Phyllia</h1>
          <p>Hello, {displayName}! I'm Phyllia, your AI assistant. Ask me anything about our services, sustainability, or how I can help you today.</p>
        </div>
        
        <div className="container">
          <ChatInterface userId={user.id} />
        </div>
      </div>
    </main>
  );
} 