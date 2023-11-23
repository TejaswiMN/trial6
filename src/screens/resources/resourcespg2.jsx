
import React from 'react';
import "./resourcespg2.css";
import BranchButton from '../../components/branches/Branches';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resources3 from './resourcespg3';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

function Resources2({schoolname}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/resources/soe/cse');   };

  return (
    <div className="App">
      <Navbar />
      <div className="wide-rounded-rectangle">{schoolname}</div>
       <BranchButton branchname="@API TEAM: Put in the branches from your database and their corresponding routes below"/>
       
       <button onClick={handleClick} >Placeholder button just so you can see the next page. remove later.</button>
    </div>
  );
}

export default Resources2;
