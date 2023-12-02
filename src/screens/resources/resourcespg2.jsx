
import React from 'react';
import "./resourcespg2.css";
import BranchButton from '../../components/branches/Branches';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

function Resources2({schoolname}) {
  const navigate = useNavigate();

  const schoolBranches = {
    SOE: ['CSE', 'ECE', 'Mechanical'],
    SME: ['BMS', 'Economics', 'Economics and Finance'],
    SNS: ["Bio-Technology", "Mathematics"],
    SHSS: ["English", "History"]
  };

  const handleClick = () => {
    navigate(`/resources/${schoolname}/${schoolBranches[schoolname][0]}`);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="wide-rounded-rectangle">{schoolname}</div>
      {schoolBranches[schoolname].map((branch) => (
        <BranchButton key={branch} branchname={branch} />
      ))}</div>
  );
}

export default Resources2;
