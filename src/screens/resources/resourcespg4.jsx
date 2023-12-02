
import React from 'react';
import NotesLinks from '../../components/NotesLinks/NotesLinks';
import Navbar from '../../components/Navbar/Navbar';
import Recommendations from '../../components/recs/recs';
import UploadFile from '../../components/UploadFile/UploadFile';

function Resources4() {
  return (
    <div className="App">
      <Navbar />
      <div className='container1'>
      <UploadFile />
      <NotesLinks /> 
      <Recommendations boldText="CSD101" regularText="Introduction to C Programming" files={[]}/>
      </div>  
    </div>
  );
}

export default Resources4;
