/*
import React from 'react';
import "./navbar.css";
import { Link, Router } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Logo</div> 
      <Router>
        <nav className="nav-links">
          <Link href="../../screens/resources/resourcespg1">Resources</Link>
          <Link href="../../screens/alumni/alumni">Alumni Interactions</Link>
          <Link href="../../screens/recs/recs">Recommendations</Link>
          <Link href="../../screens/bookmarks/bookmarks">Bookmarks</Link>
          <Link href="../../screens/profile/profile">Profile</Link>
        </nav>
      </Router> 
    </div>
  );
};

export default Navbar;
*/

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
        <Link to="/">Home</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/alumni">  Alumni Interactions</Link>
        <Link to="/profile">  Profile</Link>
      </nav>
        <Routes>
         <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
        </Routes>
      <div className="button"><button onClick={handleLogOutClick} ><h2>Logout</h2></button></div>
    </div>
  );
};

export default Navbar;
