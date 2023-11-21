import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resources from './screens/resources/resourcespg1'; // Import your route components
import Alumni from './screens/alumni/alumni';
import Profile from './screens/profile/profile';
import SignUp from './screens/signup/signup'; 
import Home from './screens/home/home';
import Login from './components/Login/Login';
import Start from './screens/start/start';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path= "/" element={<Start/>} /> 
          <Route path= "/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path= "/home" element={<Home/>} /> 
          <Route path="/resources" element={<Resources/>} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<SignUp />} />
        </Routes>
    </div>
  );
}

export default App;
