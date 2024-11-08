import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Navbar from './components/Layout/Navbar';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Login from './pages/Login';
import UserHome from './pages/Userdashboard/UserHome'; // Import UserHome component

function App() {
  const isAuthenticated = !!localStorage.getItem('token'); // Simple authentication check

  return (
    <Provider store={store}>
      <Router>
        <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <main style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              {/* Protected Route for UserHome */}
              <Route
                path="/dashboard/userhome"
                element={isAuthenticated ? <UserHome /> : <Navigate to="/login" />}
              />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
