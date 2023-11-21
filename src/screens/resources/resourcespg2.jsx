
import React from 'react';
import "./resourcespg2.css";
import BranchButton from '../../components/branches/Branches';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resources3 from './resourcespg3';

function Resources2({schoolname}) {
  return (
    <div className="App">
      <div className="wide-rounded-rectangle">{schoolname}</div>
       <BranchButton branchname="CSE"/>
       <Routes>
         <Route path="./resourcespg3" element={<Resources3 />} />
       </Routes>
       <BranchButton branchname="ECE"/>
       <BranchButton branchname="EEE"/>
       <BranchButton branchname="Mechanical"/>
       <BranchButton branchname="Chemical"/>
       <BranchButton branchname="Civil"/>
    </div>
  );
}

export default Resources2;
