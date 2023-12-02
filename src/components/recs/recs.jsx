import React from 'react';
import PropTypes from 'prop-types';
import "./recs.css";

const Recommendations = ({ boldText, regularText, files }) => {
  return (
    <div className="blue-rectangle-with-columns">
      <div className="blue-rectangle">
        <div className="blue-text">
          <p className="bold-text">{boldText}</p>
          <p className="regular-text">{regularText}</p>
        </div>
      </div>
      <div className="column">

        {/*
        <h2 className="blue-title">Useful Links</h2>
        <ul className="youtube-links">
          {youtubeLinks.map((link, index) => (
            <li key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                YouTube Link {index + 1}
              </a>
            </li>
          ))}
        </ul>
          */}
      </div>
      <div className="column">
        <h2 className="blue-title">Notes</h2>
        <ul className="files">
          {files.map((file, index) => (
            <li key={index}>
              <a href={file} target="_blank" rel="noopener noreferrer">
                File {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Recommendations.propTypes = {
  boldText: PropTypes.string.isRequired,
  regularText: PropTypes.string.isRequired,
  youtubeLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
  files: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Recommendations;
