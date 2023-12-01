import React from 'react';
import axios from "axios";
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
import Resources2 from './screens/resources/resourcespg2';
import Resources3 from './screens/resources/resourcespg3';
import Resources4 from './screens/resources/resourcespg4';
import Uploadpage from './screens/Uploadpage/Uploadpage';

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
          <Route path="/upload" element={<Uploadpage/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<SignUp />} />          
          <Route path="/resources/SOE" element={<Resources2 schoolname="School of Engineering" />} />
          <Route path="/resources/SME" element={<Resources2 schoolname="School of Management and Entrepreneurship" />} />
          <Route path="/resources/SNS" element={<Resources2 schoolname="School of Natural Sciences" />} />
          <Route path="/resources/SHSS" element={<Resources2 schoolname="School of Humanities and Social Sciences" />} />
          <Route path='/resources/SOE/cse' element={<Resources3 branch="CSE" />} />
          <Route path='/putthepathlike/resources/scoolname/brnach/coursecode' element={<Resources4 course="CSE" /*pass all the required things from the database*//>} />
         {/* API TEAM: Put in the routes to every other page you're creating */}
        </Routes>
    </div>
  );
}

export default App;
