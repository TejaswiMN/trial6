import React from 'react';
import { Link } from 'react-router-dom';
import "./UploadFile.css";

const UploadFile = () => {
  return (
    <div className="resource-hub">
      <h1 className="black-text">YOUR ONE-STOP RESOURCE HUB</h1>
      <div className="gradient-box">
        <button className="upload-button">Upload file</button>
        {/* Use the Link component to navigate to the upload page */}
        <Link to="/upload" className="upload-button">
        </Link>
      </div>
    </div>
  );
};

export default UploadFile;
