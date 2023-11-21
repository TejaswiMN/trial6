
import React from 'react';
import Uploads from '../../components/UploadFile/UploadFile';
import Blog from '../../components/blog/blog';
import Navbar from '../../components/Navbar/Navbar';
import AboutUs from '../../components/AboutUs/AboutUs';
import FeaturesIncluded from '../../components/FeaturesIncluded/FeaturesIncluded';
import ContactBox from '../../components/ContactBox/ContactBox';
import Bottom from '../../components/bottom/bottom';

function Alumni() {
  return (
    <div className="Alumni">
      <Navbar />
      <Uploads />     
        <Blog Name={"ABC"} Year={"2019"} Title={"Title"} Article={"Article"}/>  
      <AboutUs  />
      <FeaturesIncluded />
      <ContactBox />
      <Bottom />
    </div>
  );
}

export default Alumni;
