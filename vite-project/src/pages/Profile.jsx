import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { MessageSquare, Clock } from 'lucide-react';

const Profile = () => {
  const chats = useSelector((state) => state.chat.chats);
  const user = useSelector((state) => state.user.user);

  // UseEffect to check if user data is loaded or not
  useEffect(() => {
    if (!user) {
      console.log('User data is not available');
    }
  }, [user]);

  const totalMessages = chats.reduce((acc, chat) => acc + chat.messages.length, 0);
  const lastChatDate = chats.length > 0 
    ? format(chats[chats.length - 1].createdAt, 'PPP')
    : 'No chats yet';

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '2rem' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', padding: '1.5rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '5rem', height: '5rem', borderRadius: '50%', backgroundColor: '#ebf8ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2563eb' }}>
                {user?.name?.[0] || 'G'}
              </span>
            </div>
            <div>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>
                {user?.name || 'Guest User'}
              </h1>
              <p style={{ color: '#4b5563' }}>
                {user?.email || 'No email provided'}
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: '1fr', marginTop: '1.5rem' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <MessageSquare style={{ height: '1.5rem', width: '1.5rem', color: '#2563eb' }} />
              <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937' }}>Chat Statistics</h2>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ color: '#4b5563' }}>Total Chats</p>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937' }}>{chats.length}</p>
            </div>
            <div>
              <p style={{ color: '#4b5563' }}>Total Messages</p>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937' }}>{totalMessages}</p>
            </div>
          </div>

          <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Clock style={{ height: '1.5rem', width: '1.5rem', color: '#2563eb' }} />
              <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937' }}>Activity</h2>
            </div>
            <div>
              <p style={{ color: '#4b5563' }}>Last Chat</p>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937' }}>{lastChatDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
