
import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from '../../screens/signup/signup';
import Login from '../../screens/login/login';

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogOutClick = () => {
    navigate('/');   };

  return (
    <div className="navbar">
      <div className="logo">
       <img src="./logo.png" alt="logo" /> 
      </div> 
      <nav className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/alumni">  Alumni Interactions</Link>
        <Link to="/profile">  Profile</Link>
      </nav>
      <div className="button"><button onClick={handleLogOutClick} ><h2>Logout</h2></button></div>
    </div>
  );
};

export default Navbar;
