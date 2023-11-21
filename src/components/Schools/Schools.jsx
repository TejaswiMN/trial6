import React from 'react';
import './Schools.css';
import Resources2 from '../../screens/resources/resourcespg2';

import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const SchoolButtons = () => {
  const navigate = useNavigate();

  const handleSOEClick = () => {
    navigate('/resourcespg2'); 
  };

  return (
    <div className="school-buttons">
      <button className="blue-button" onClick={handleSOEClick}>School of Engineering</button>
      <Routes>
         <Route path="../screens/resourcespg2" element={<Resources2 schoolname="School of Engineering" />} />
       </Routes>
      <button className="blue-button">School of Natural Sciences</button>
      <button className="blue-button">School of Management and Entrepreneurship</button>
      <button className="blue-button">School of Humanities and Social Sciences</button>
    </div>
  );
};

export default SchoolButtons;
