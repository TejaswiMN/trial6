
import React from 'react';
import Courses from '../../components/courses/Courses';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

function Resources3({ branch }) {
  const navigate = useNavigate();

  const branchCourses = {
    CSE: ['CSD101', 'CSD102', 'CSDE201', 'CSD205'],
    ECE: ['EED101', 'EED102', 'EED201'],
    Mechanical: ['MED101', 'MED102', 'MED201']
  };

  const handleClick = () => {
    navigate(`/resources/SOE/cse/CSD101`);
  };

  return (
    <div className="App">
      <Navbar />
      <div className='container1'>
        <Courses branch={branch} buttons={branchCourses[branch]} />
      </div>
    </div>
  );
}

export default Resources3;