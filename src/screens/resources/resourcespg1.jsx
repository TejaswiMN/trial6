
import React from 'react';
import Schools from '../../components/Schools/Schools';
import Navbar from '../../components/Navbar/Navbar';
import AboutUs from '../../components/AboutUs/AboutUs';
import FeaturesIncluded from '../../components/FeaturesIncluded/FeaturesIncluded';
import ContactBox from '../../components/ContactBox/ContactBox';
import Bottom from '../../components/bottom/bottom';

function Resources1() {
  return (
    <div className="Resources1">
      <div className='container1'>
        <Navbar />
        <Schools />
        <AboutUs  />
        <FeaturesIncluded />
        <ContactBox />
        <Bottom />
      </div>  
    </div>
  );
}

export default Resources1;
