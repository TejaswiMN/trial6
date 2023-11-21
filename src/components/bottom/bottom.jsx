import React from 'react'; 
import "./bottom.css";

const Bottom = () => {
  return (
    <div className="bottom">
      <div className="section1">
        <div className="logo">
          <img src="./logo.png" alt="logo" />
        </div>
      </div>
      <div className="section2">
        <h2>Services</h2>
        <ul>
          <li>About Us</li>
          <li>Alumni Interactions</li>
          <li>Recommendations</li>
          <li>Bookmarks</li>
        </ul>
      </div>
      <div className="section3">
        <h2>Contact Us</h2>
        <ul>
          <li>+91-120-7170100 ·</li>
          <li>resourcify.help@snu.edu.in</li>
        </ul>
    </div>
    </div>
  );
};

export default Bottom;
