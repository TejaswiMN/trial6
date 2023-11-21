import React from 'react';

const BlueSquareWithText = () => {
  return (
    <div className="blue-square">
      <div className="c1">
        <div className="image-container">
          <img src="./notes.png" alt="Blue Square" />
        </div>
        <div className="blue-text">Notes:</div>
        <div className="black-text">Share, view, filter, and bookmark learning materials  </div>
      </div>
      <div className="c2">
        <div className="image-container">
          <img src="./alumni.png" alt="Blue Square" />
        </div>
        <div className="blue-text">Alumni Interaction:</div>
        <div className="black-text">Read their blogs, ask them questions, they’d love to help you out!</div>
      </div>
      <div className="c3">
        <div className="image-container">
          <img src="./recs.png" alt="Blue Square" />
        </div>
        <div className="blue-text">Recommendations:</div>
        <div className="black-text">Courses your seniors loved (or didn’t), so that you can do better :) </div>
      </div>
    </div>
    
  );
};

export default BlueSquareWithText;
