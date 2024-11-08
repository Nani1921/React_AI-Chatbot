import React, { useState } from 'react';
import { Send } from 'lucide-react'; 
// Run: npm install lucide-react

const ChatInput = ({ onSend, disabled }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage('');
    }
  };

  return (
    <form
    onSubmit={handleSubmit}
    style={{
      
      position: 'sticky',
      bottom: '1rem',
      display: 'flex',
      alignItems: 'center',
      padding: '1rem',
      borderTop: '1px solid #e5e7eb',
      backgroundColor: '#ffffff',
      borderRadius: '0.5rem',
      boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)', // Optional shadow for better visibility
      zIndex: '10',
    }}
  >
    <input
      type="text"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Type your message..."
      disabled={disabled}
      style={{
        flex: 1,
        padding: '0.7rem 1rem',
        border: '1px solid #d1d5db',
        borderRadius: '0.5rem',
        outline: 'none',
        transition: 'border-color 0.2s',
        backgroundColor: disabled ? '#f3f4f6' : '#ffffff',
      }}
    />
    <button
      type="submit"
      disabled={!message.trim() || disabled}
      style={{
        padding: '0.5rem',
        marginLeft: '0.5rem',
        borderRadius: '0.5rem',
        backgroundColor: disabled ? '#9ca3af' : '#3b82f6',
        color: '#ffffff',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background-color 0.2s',
        border: 'none',
      }}
    >
      <Send size={20} />
    </button>
  </form>
  );
};

export default ChatInput;
