import React from 'react';
import PropTypes from 'prop-types';
import "./courses.css";
import { useNavigate } from 'react-router-dom';

const RoundedRectangles = ({ branch, buttons }) => {
  const navigate = useNavigate();

  const handleCourseClick = (button) => {
    navigate(`/resources/SOE/${branch}/${button}`);
  };

  return (
    <div className="rounded-rectangles">
      <h2 className="light-blue-text">{branch}</h2>
      <div className="button-container">
        {buttons.map((button, ind) => (
          <div key={ind} className="rounded-button">
            <button onClick={() => handleCourseClick(button)}>{button}</button>
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
