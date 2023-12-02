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
import Resources2 from './screens/resources/resourcespg2';
import Resources3 from './screens/resources/resourcespg3';
import Resources4 from './screens/resources/resourcespg4';

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
          <Route path="/resources/SOE" element={<Resources2 schoolname="SOE" />} />
          <Route path="/resources/SME" element={<Resources2 schoolname="SME" />} />
          <Route path="/resources/SNS" element={<Resources2 schoolname="SNS" />} />
          <Route path="/resources/SHSS" element={<Resources2 schoolname="SHSS" />} />
          <Route path='/resources/SOE/CSE' element={<Resources3 branch="CSE" />} />
          <Route path='/resources/SOE/ECE' element={<Resources3 branch="ECE" />} />
          <Route path='/resources/SOE/Mechanical' element={<Resources3 branch="Mechanical" />} />
          <Route path='/resources/SNS/math' element={<Resources3 branch="Mathematics" />} />
          <Route path='/resources/SNS/biotech' element={<Resources3 branch="Bio-Technology" />} />
          <Route path='/resources/SME/bms' element={<Resources3 branch="BMS" />} />
          <Route path='/resources/SME/eco' element={<Resources3 branch="Economics" />} />
          <Route path='/resources/SME/ecofin' element={<Resources3 branch="Economics and Finance" />} />
          <Route path='/resources/SHSS/eng' element={<Resources3 branch="English" />} />
          <Route path='/resources/SHSS/hist' element={<Resources3 branch="History" />} />
          <Route path='/resources/SOE/cse/CSD101' element={<Resources4 />} />
          </Routes>
    </div>
  );
}

export default App;
