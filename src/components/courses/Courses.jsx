import React from 'react';
import PropTypes from 'prop-types';
import "./courses.css";
import { useNavigate } from 'react-router-dom';

const RoundedRectangles = ({ branch, buttons }) => {

  const navigate = useNavigate();
  const handlecourseClick = () => {
    navigate('/putthepathlike/resources/scoolname/brnach/coursecode');   };

  return (
    <div className="rounded-rectangles">
      <h2 className="light-blue-text">{branch}</h2>
      <div className="button-container">
        {buttons.map((button, index) => (
          <div key={index} className="rounded-button">
            <div className="button-title">{button.courseCode} </div>
            <button className="button-subtitle" onClick={handlecourseClick}>{button.courseName}</button>
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
