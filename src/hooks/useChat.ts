import { useState } from 'react';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant' | 'system';
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1', 
      content: 'Bienvenue sur Phyllia Chat! Comment puis-je vous aider aujourd\'hui?', 
      role: 'system' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user'
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      // Simulate AI response (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "Merci pour votre message! Phyllia est actuellement en phase de développement. Nous travaillons activement pour intégrer les fonctionnalités d'IA complètes.",
        role: 'assistant'
      };
      
      setMessages(prevMessages => [...prevMessages, aiResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Désolé, une erreur s'est produite. Veuillez réessayer plus tard.",
        role: 'system'
      };
      
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading
  };
} 