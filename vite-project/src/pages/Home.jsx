import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Sparkles, Lock } from 'lucide-react';

const Home = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #ebf8ff, #ffffff)' }}>
      
      {/* Top buttons for Register and Login */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem', gap: '1rem' }}>
        <Link
          to="/register"
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'background-color 0.2s',
          }}
        >
          Register
        </Link>
        <Link
          to="/login"
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'background-color 0.2s',
          }}
        >
          Login
        </Link>
      </div>
      
      {/* Main content */}
      <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '4rem 1rem' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#1f2937', letterSpacing: '-0.05em' }}>
            Welcome to AI Chat Assistant
          </h1>
          <p style={{ marginTop: '1.5rem', fontSize: '1.125rem', lineHeight: '1.75rem', color: '#4b5563' }}>
            Experience the power of AI-driven conversations. Get instant responses, save your chat history,
            and explore the possibilities of artificial intelligence.
          </p>
          <div style={{ marginTop: '2.5rem' }}>
            <Link
              to="/chat"
              style={{
                display: 'inline-block',
                backgroundColor: '#2563eb',
                color: 'white',
                padding: '0.75rem 1.5rem',
                fontSize: '1.125rem',
                fontWeight: '600',
                borderRadius: '0.375rem',
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                textDecoration: 'none',
              }}
            >
              Start Chatting
            </Link>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '2rem', marginTop: '5rem', gridTemplateColumns: '1fr', maxWidth: '49rem', marginLeft: 'auto', marginRight: 'auto' }}>
          {[
            { icon: <MessageSquare />, title: 'Smart Conversations', text: 'Engage in natural conversations with our AI assistant powered by advanced language models.' },
            { icon: <Sparkles />, title: 'Intelligent Responses', text: 'Get accurate and contextual responses to your questions, powered by state-of-the-art AI technology.' },
            { icon: <Lock />, title: 'Secure & Private', text: 'Your conversations are stored locally and securely, ensuring your privacy and data protection.' }
          ].map(({ icon, title, text }, index) => (
            <div key={index} style={{ position: 'relative', padding: '1.5rem', backgroundColor: 'white', borderRadius: '0.95rem', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', border: '1px solid #e5e7eb' }}>
              <div style={{ position: 'absolute', top: '-1rem', left: '50%', transform: 'translateX(-50%)' }}>
                <div style={{ backgroundColor: '#dbecff', borderRadius: '50%', padding: '0.75rem' }}>
                  <span style={{ color: '#2563eb', fontSize: '1.5rem' }}>{icon}</span>
                </div>
              </div>
              <h3 style={{ marginTop: '1rem', fontSize: '1.125rem', fontWeight: '600', color: '#1f2937' }}>{title}</h3>
              <p style={{ marginTop: '0.5rem', color: '#4b5563' }}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
