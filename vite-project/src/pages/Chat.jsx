import React, { useEffect, useRef } from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addChat, addMessage, setLoading, setError } from '../store/slices/chatSlice';
import { generateResponse } from '../services/aiService';
import { saveChats } from '../services/storageService';
import ChatMessage from '../components/Chat/ChatMessage';
import ChatInput from '../components/Chat/ChatInput';

const Chat = () => {
  const dispatch = useDispatch();
  const { chats, activeChat, loading, error } = useSelector((state) => state.chat);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!activeChat && chats.length === 0) {
      dispatch(
        addChat({
          id: uuidv4(),
          title: 'New Chat',
          messages: [],
          createdAt: Date.now(),
        })
      );
    }
  }, [dispatch, activeChat, chats.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chats, activeChat]);

  useEffect(() => {
    saveChats(chats);
  }, [chats]);

  const handleSendMessage = async (content) => {
    if (!activeChat) return;

    const userMessage = {
      id: uuidv4(),
      content,
      role: 'user',
      timestamp: Date.now(),
    };

    dispatch(addMessage({ chatId: activeChat, message: userMessage }));

    try {
      dispatch(setLoading(true));
      const response = await generateResponse(content);

      const aiMessage = {
        id: uuidv4(),
        content: response,
        role: 'assistant',
        timestamp: Date.now(),
      };

      dispatch(addMessage({ chatId: activeChat, message: aiMessage }));
    } catch (error) {
      dispatch(setError('Failed to generate response. Please try again.'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const currentChat = chats.find((chat) => chat.id === activeChat);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', paddingTop: '4rem', paddingBottom: '1rem' }}>
      <div style={{ flex: 1, overflowY: 'auto', padding: '1rem 2rem' }}>
        {currentChat?.messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <ChatInput onSend={handleSendMessage} disabled={loading} />
    </div>
  );
};

export default Chat;
