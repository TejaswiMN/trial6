
import React from 'react';
import NotesLinks from '../../components/NotesLinks/NotesLinks';
import Navbar from '../../components/Navbar/Navbar';
import Recommendations from '../../components/recs/recs';

function Resources4() {
  return (
    <div className="App">
      <Navbar />
      <div className='container1'>
      <NotesLinks />
      <Recommendations />
      </div>  
    </div>
  );
}

export default Resources4;
