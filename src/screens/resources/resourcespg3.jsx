
import React from 'react';
import Courses from '../../components/courses/Courses';
import Navbar from '../../components/Navbar/Navbar';

function Resources3({branch}) {
  return (
    <div className="App">
      <Navbar />
      <div className='container1'>
      <Courses branch={branch} buttons={["pass a LIST of all courses in that branch","like this"]}/>
      </div>  
    </div>
  );
}

export default Resources3;
