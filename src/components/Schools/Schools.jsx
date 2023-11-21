import React from 'react';
import './Schools.css';
import Resources2 from '../../screens/resources/resourcespg2';

import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const SchoolButtons = () => {
  const navigate = useNavigate();

  const handleSOEClick = () => {
    navigate('/resources/SOE');
  };
  const handleSNSClick = () => {
    navigate('/resources/SNS');
  };
  const handleSMEClick = () => {
    navigate('/resources/SME');
  };
  const handleSHSSClick = () => {
    navigate('/resources/SHSS');
  };

  return (
    <div className="school-buttons">
      <button className="blue-button" onClick={handleSOEClick}>School of Engineering</button>
      <button className="blue-button" onClick={handleSNSClick}>School of Natural Sciences</button>
      <button className="blue-button" onClick={handleSMEClick}>School of Management and Entrepreneurship</button>
      <button className="blue-button" onClick={handleSHSSClick}>School of Humanities and Social Sciences</button>  
    </div>
  );
};

export default SchoolButtons;
