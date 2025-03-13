'use client';

import { useUser, useStackApp, UserButton, SignIn } from '@stackframe/stack';
import { useState } from 'react';
import styles from '../styles/chat.module.css';

export default function ChatPage() {
  const user = useUser();
  const app = useStackApp();
  const [messages, setMessages] = useState<{ text: string; sender: string; timestamp: Date }[]>([
    { text: 'Bienvenue sur Phyllia Chat!', sender: 'system', timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || !user) return;

    const newMessage = {
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          text: "Merci pour votre message! Votre demande a été reçue, nous vous répondrons bientôt.",
          sender: 'ai',
          timestamp: new Date()
        }
      ]);
    }, 1000);
  };

  if (!user) {
    return (
      <div className="stack-auth-container">
        <SignIn />
      </div>
    );
  }

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <h1>Phyllia Chat</h1>
        <div className={styles.userProfile}>
          <span>Bonjour, {user.displayName || 'Utilisateur'}</span>
          <UserButton />
        </div>
      </div>

      <div className={styles.messageList}>
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`${styles.message} ${styles[msg.sender]}`}
          >
            <div className={styles.messageContent}>
              <p>{msg.text}</p>
              <span className={styles.timestamp}>
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSendMessage} className={styles.inputArea}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Tapez votre message ici..."
          className={styles.messageInput}
        />
        <button type="submit" className={styles.sendButton}>
          Envoyer
        </button>
      </form>
    </div>
  );
} 