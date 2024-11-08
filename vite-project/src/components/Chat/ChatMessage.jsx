import React from 'react';
import { format } from 'date-fns'; // Run: npm install date-fns
import { Message } from '../../types';
import { Bot, User } from 'lucide-react'; // Run: npm install lucide-react

const ChatMessage = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        marginBottom: '1rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: isUser ? 'row-reverse' : 'row',
          alignItems: 'flex-start',
          maxWidth: '80%',
        }}
      >
        <div
          style={{
            width: '2rem',
            height: '2rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: isUser ? '#bfdbfe' : '#f3f4f6',
            marginLeft: isUser ? '0.5rem' : '0',
            marginRight: !isUser ? '0.5rem' : '0',
          }}
        >
          {isUser ? <User size={16} /> : <Bot size={16} />}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: isUser ? 'flex-end' : 'flex-start' }}>
          <div
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              backgroundColor: isUser ? '#2563eb' : '#f3f4f6',
              color: isUser ? '#ffffff' : '#1f2937',
            }}
          >
            <p style={{ fontSize: '0.875rem', margin: 0 }}>{message.content}</p>
          </div>
          <span style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>
            {format(message.timestamp, 'HH:mm')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
