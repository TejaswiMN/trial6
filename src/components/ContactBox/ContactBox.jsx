import React from 'react';
import './ContactBox.css'; // Import your CSS file

const ContactBox = () => {
  return (
    <div className="blue-box">
      <div className="content">
        <div className="left-content">
          <div className="black-rounded-rectangle">Get in Touch</div>
          <div className="black-text">Have an inquiry or some feedback for us?</div>
          <div className="rounded-rectangle">Feedback</div>
          <div className="rounded-rectangle">Connect With Us</div>
        </div>
        <div className="right-content">
          <img src="./Ikbal.png" alt="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default ContactBox;
