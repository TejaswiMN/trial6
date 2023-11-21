import React from 'react';
import PropTypes from 'prop-types';
import "./NotesLinks.css";

const NotesLinks = ({ Branch, CourseId, CourseName, aboutCourse }) => {
  return (
    <div className="NotesLinks">
      <h2 className="blue-text">{Branch}</h2>
      <div className="blue-rectangle">
        <p className="bold-text">{CourseId}</p>
        <p className="regular-text">{CourseName}</p>
      </div>
      <p className="blue-heading">About</p>
      <p className="black-text">{aboutCourse}</p>
    </div>
  );
};

NotesLinks.propTypes = {
  Branch: PropTypes.string.isRequired,
  CourseId: PropTypes.string.isRequired,
  CourseName: PropTypes.string.isRequired,
  aboutCourse: PropTypes.string.isRequired,
};

export default NotesLinks;
