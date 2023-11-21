import React from 'react';
import PropTypes from 'prop-types';
import "./courses.css";

const RoundedRectangles = ({ branch, buttons }) => {
  return (
    <div className="rounded-rectangles">
      <h2 className="light-blue-text">{branch}</h2>
      <div className="button-container">
        {buttons.map((button, index) => (
          <div key={index} className="rounded-button">
            <div className="button-title">
              <strong>{button.courseCode}</strong>
            </div>
            <div className="button-subtitle">{button.courseName}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

RoundedRectangles.propTypes = {
  branch: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      courseCode: PropTypes.string.isRequired,
      courseName: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RoundedRectangles;
