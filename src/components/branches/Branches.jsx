import React from 'react';
import "./branches.css";

const BranchButton = ({ branchname}) => {

  return (
    <div className="branchbutton">
      <div className="button-container">{branchname}</div>
    </div>
  );
};

export default BranchButton;

