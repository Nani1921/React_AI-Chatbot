import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MessageSquare, Home, User } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [showModal, setShowModal] = useState(false);
  const [targetLink, setTargetLink] = useState('');

  const isAuthenticated = !!localStorage.getItem("token");

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleLinkClick = (e, link) => {
    if (!isAuthenticated) {
      e.preventDefault();
      setTargetLink(link);
      setShowModal(true);
    } else {
      navigate(link);
    }
  };

  const handleLoginRedirect = () => {
    setShowModal(false);
    localStorage.setItem("token", "your-authentication-token");
    navigate("/dashboard/userhome");
  };

  return (
    <>
      <nav style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', backgroundColor: '#ffffff', borderTop: '1px solid #e5e7eb', zIndex: 1000 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '4rem' }}>
            <Link
              to={isAuthenticated ? "/dashboard/userhome" : "/"}
              style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem', borderRadius: '0.5rem', color: isActive(isAuthenticated ? "/dashboard/userhome" : "/") ? '#2563eb' : '#4b5563', textDecoration: 'none', transition: 'color 0.2s' }}
            >
              <Home size={20} />
              <span style={{ marginLeft: '0.5rem' }}>Home</span>
            </Link>

            <Link
              to="/chat"
              onClick={(e) => handleLinkClick(e, "/chat")}
              style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem', borderRadius: '0.5rem', color: isActive("/chat") && isAuthenticated ? '#2563eb' : '#4b5563', textDecoration: 'none', transition: 'color 0.2s' }}
            >
              <MessageSquare size={20} />
              <span style={{ marginLeft: '0.5rem' }}>Chat</span>
            </Link>

            <Link
              to="/profile"
              onClick={(e) => handleLinkClick(e, "/profile")}
              style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem', borderRadius: '0.5rem', color: isActive("/profile") && isAuthenticated ? '#2563eb' : '#4b5563', textDecoration: 'none', transition: 'color 0.2s' }}
            >
              <User size={20} />
              <span style={{ marginLeft: '0.5rem' }}>Profile</span>
            </Link>

            {isAuthenticated && (
              <button
                onClick={handleLogout}
                style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', backgroundColor: '#2563eb', color: '#ffffff', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.2s' }}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>

      {showModal && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.modal}>
            <h3>Please log in to access {targetLink === "/chat" ? "the chat" : "your profile"}</h3>
            <div style={modalStyles.buttons}>
              <button onClick={handleLoginRedirect} style={modalStyles.button}>Login</button>
              <button onClick={() => setShowModal(false)} style={modalStyles.button}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '0.5rem',
    textAlign: 'center',
    width: '300px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '1rem',
  },
  button: {
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    backgroundColor: '#2563eb',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold',
    border: 'none',
  },
};

export default Navbar;
