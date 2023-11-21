/*
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from '../signup/signup';
import Login from '../login/login';
import Saly from '../../components/Saly/Saly';
import AboutUs from '../../components/AboutUs/AboutUs';
import FeaturesIncluded from '../../components/FeaturesIncluded/FeaturesIncluded';
import BlueSquareWithText from '../../components/SquareAndText/SquareAndText';
import ContactBox from '../../components/ContactBox/ContactBox';
import Bottom from '../../components/bottom/bottom';
import './start.css';

const Start = () => {
    const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');   };

  const handleSignupClick = () => {
    navigate('/signup'); }

  return (    
    <div className="start">
        <button className="rounded-blue-button" onClick={handleLoginClick}>
          Login
        </button>
        <button className="rounded-black-button" onClick={handleSignupClick}>
          Signup
        </button>
        <div> <h1>Hello </h1>Hello</div>
        <Routes>
         <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login/>} />
        </Routes>
        <Saly />
        <Start/>
        <AboutUs />
        <FeaturesIncluded />
        <div className="blueSquares">
        <BlueSquareWithText/>
        </div>
        <ContactBox />
        <Bottom />
      </div>
  );
};

export default Start;
*/

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './start.css';


function Start() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');   };

  const handleSignupClick = () => {
    navigate('/signup'); }

  return (
  <div className="start">
    <img src="./logo.png" alt="logo" /> 
    <h1>RESOURCIFY </h1>
    <button className="rounded-blue-button" onClick={handleLoginClick}>
        Login
    </button>
    <button className="rounded-black-button" onClick={handleSignupClick}>
        SignUp
    </button>
  </div>
  );
}

export default Start;
