
import React from 'react';
import Courses from '../../components/courses/Courses';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

function Resources3({branch}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/putthepathlike/resources/scoolname/brnach/coursecode');   };

  return (
    <div className="App">
      <Navbar />
      <div className='container1'>
      <Courses branch={branch} buttons={["pass a LIST of all courses in that branch","like this"]}/>
      
      <button onClick={handleClick} >Placeholder button just so you can see the next page. remove later.</button>
      </div>  
    </div>
  );
}

export default Resources3;
