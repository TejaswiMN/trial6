import React from 'react';
import PropTypes from 'prop-types';
import './profile.css';

const ProfileComp = ({ name, branch, year, mobile }) => {
  return (
    <div className="user-info">
      <div className="input-field">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" className="input-box" value={name} readOnly />
      </div>
      <div className="input-field">
        <label htmlFor="branch">Branch</label>
        <input type="text" id="branch" className="input-box" value={branch} readOnly />
      </div>
      <div className="input-field">
        <label htmlFor="year">Year</label>
        <input type="text" id="year" className="input-box" value={year} readOnly />
      </div>
      <div className="input-field">
        <label htmlFor="mobile">Mobile No</label>
        <input type="text" id="mobile" className="input-box" value={mobile} readOnly />
      </div>
    </div>
  );
};

ProfileComp.propTypes = {
  name: PropTypes.string.isRequired,
  branch: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
};

export default ProfileComp;
