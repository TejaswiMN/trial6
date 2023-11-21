
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Saly from '../../components/Saly/Saly';
import AboutUs from '../../components/AboutUs/AboutUs';
import FeaturesIncluded from '../../components/FeaturesIncluded/FeaturesIncluded';
import BlueSquareWithText from '../../components/SquareAndText/SquareAndText';
import ContactBox from '../../components/ContactBox/ContactBox';
import Bottom from '../../components/bottom/bottom';
import UploadFile from '../../components/UploadFile/UploadFile';

function Home() {
  return (
    <div className="App">
      <Navbar /> 
      <div className='container1'>
      <Saly />    
      </div>  
      <AboutUs />
      <FeaturesIncluded />
      <div className='blueSquares'>
      <BlueSquareWithText image="././img/notes.png" blueText='Notes' blackText='Testing'/>
      </div>
      <ContactBox />
      <Bottom />
    </div>
  );
}

export default Home;
