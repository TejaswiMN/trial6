import React from 'react';
import "./branches.css";
import { useNavigate } from 'react-router-dom';

const BranchButton = ({ branchname}) => {
  const navigate = useNavigate();
  const handlebranchClick = () => {
    navigate('/resources/SOE/cse');   };    {/* @API Team: This was an example; Put in the route to each branch page */}

  return (
    <div className="branchbutton">
      <div className="button-container">
        <button onClick={handlebranchClick} >{branchname}</button>
      </div>
    </div>
  );
};

export default BranchButton;

