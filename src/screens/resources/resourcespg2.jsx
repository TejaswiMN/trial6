
import React from 'react';
import "./resourcespg2.css";
import BranchButton from '../../components/branches/Branches';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resources3 from './resourcespg3';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

function Resources2({schoolname}) {
  return (
    <div className="App">
      <Navbar />
      <div className="wide-rounded-rectangle">{schoolname}</div>
       <BranchButton branchname="@API TEAM: Put in the branches from your database and their corresponding routes below"/>
       
    </div>
  );
}

export default Resources2;
