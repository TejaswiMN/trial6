import React from 'react';
import './EmailPwd.css';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../screens/start/start';

const EmailPwd = () => {
  const navigate = useNavigate();

  const handleContClick = () => {
    navigate('/login'); // Navigate to the login page 
  }

  return (
    <div className="signup-form">
      <label htmlFor="email">Email ID:</label>
      <input type="text" id="email" className="input-box" />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" className="input-box" />

      <button className="signup-button" onClick={handleContClick}>Continue</button>
      <Routes>
         <Route path="./screens/home/home" element={<Home />} />
      </Routes> 
    </div>
  );
};

export default EmailPwd;
