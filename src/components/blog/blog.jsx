import React from 'react';
import PropTypes from 'prop-types';
import "./blog.css";

const Blog = ({Name, Year, Title, Article}) => {
  return (
    <div className="blue-rectangle">
    <div className="info-with-button">
      <p className="bold-text">
        {Name} <span className="small-text">Graduation Year: {Year}</span>
      </p>
      <p className="additional-bold-text">{Title}</p>
      <p className="paragraph">{Article}</p>
    </div>
    </div>
  );
};

Blog.propTypes = {
  Name: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Article: PropTypes.string.isRequired,
};

export default Blog;
