import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post("https://react-ai-chatbot-eta.vercel.app/user/login", formData);
    setMessage("Login successful");
    localStorage.setItem("token", response.data.token);
    navigate("/dashboard/userhome");
  } catch (error) {
    setMessage(error.response?.data?.message || "An error occurred");
  }
};

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f6' }}>
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '24rem', backgroundColor: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1f2937', textAlign: 'center' }}>Login</h2>
        {message && <p style={{ color: message === "Login successful" ? '#2563eb' : 'red', textAlign: 'center' }}>{message}</p>}
        <label style={{ fontWeight: 'bold', color: '#4b5563' }}>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', margin: '0.5rem 0', border: '1px solid #d1d5db', borderRadius: '0.375rem' }} />
        <label style={{ fontWeight: 'bold', color: '#4b5563' }}>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', margin: '0.5rem 0', border: '1px solid #d1d5db', borderRadius: '0.375rem' }} />
        <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#2563eb', color: 'white', fontWeight: 'bold', borderRadius: '0.375rem', marginTop: '1rem', cursor: 'pointer' }}>Login</button>
      </form>
    </div>
  );
};

export default Login;
