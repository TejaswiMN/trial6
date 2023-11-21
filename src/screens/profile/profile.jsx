
import React from 'react';
import ProfileComp from '../../components/profile/profile';
import Navbar from '../../components/Navbar/Navbar';

function Profile() {
  return (
    <div className="ProfileComp">
      <Navbar />
      <div className='container1'>
        <ProfileComp name="ABC" branch="CSE" year="2025" mobile="9542365797"/> {/*put in your values here in a loop*/}
      </div>
    </div>
  );
}

export default Profile;
