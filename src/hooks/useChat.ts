import { useState } from 'react';

export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant' | 'system';
  timestamp: number;
}

export function useChat(userId: string) {
  const [messages, setMessages] = useState<Message[]>(() => {
    // Try to load messages from localStorage
    if (typeof window !== 'undefined') {
      const savedMessages = localStorage.getItem(`chat_messages_${userId}`);
      if (savedMessages) {
        return JSON.parse(savedMessages);
      }
    }
    
    // Default welcome message
    return [{ 
      id: crypto.randomUUID(),
      content: 'Bienvenue sur Phyllia Chat! Comment puis-je vous aider aujourd\'hui?', 
      role: 'system',
      timestamp: Date.now()
    }];
  });
  
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Save messages to localStorage whenever they change
  const saveMessages = (newMessages: Message[]) => {
    setMessages(newMessages);
    if (typeof window !== 'undefined') {
      localStorage.setItem(`chat_messages_${userId}`, JSON.stringify(newMessages));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim() || isLoading) return;
    
    // Add user message
    const userMessage: Message = {
      id: crypto.randomUUID(),
      content: input.trim(),
      role: 'user',
      timestamp: Date.now()
    };
    
    const updatedMessages = [...messages, userMessage];
    saveMessages(updatedMessages);
    setInput('');
    setIsLoading(true);
    
    try {
      // Simulate AI response (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
      
      const aiResponse: Message = {
        id: crypto.randomUUID(),
        content: generateResponse(input.trim()),
        role: 'assistant',
        timestamp: Date.now()
      };
      
      saveMessages([...updatedMessages, aiResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Add error message
      const errorMessage: Message = {
        id: crypto.randomUUID(),
        content: "Désolé, une erreur s'est produite. Veuillez réessayer plus tard.",
        role: 'system',
        timestamp: Date.now()
      };
      
      saveMessages([...updatedMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Simple response generator
  const generateResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('bonjour')) {
      return "Bonjour! Comment puis-je vous aider aujourd'hui?";
    } else if (lowerInput.includes('help') || lowerInput.includes('aide')) {
      return "Je suis là pour vous aider! Vous pouvez me poser des questions sur Phyllia, nos services, ou tout autre sujet.";
    } else if (lowerInput.includes('phyllia')) {
      return "Phyllia est une IA 100% française et écoresponsable, conçue pour vous assister dans diverses tâches. Je suis constamment en apprentissage pour mieux vous servir!";
    } else if (lowerInput.includes('merci') || lowerInput.includes('thank')) {
      return "Je vous en prie! Y a-t-il autre chose que je puisse faire pour vous?";
    } else {
      return "C'est une question intéressante. Je suis encore en phase d'apprentissage, mais je ferai de mon mieux pour vous aider. Pourriez-vous me donner plus de détails ou me poser une autre question?";
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