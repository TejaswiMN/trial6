import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './profile.css';

  const ProfileComp = () => {
    const [userData, setUserData] = useState({
      name: '',
      branch: '',
      year: '',
      phoneNumber: ''
    });
    const [isEditing, setIsEditing] = useState(false);
  
    useEffect(() => {
      // Fetch user data from the server when the component mounts
      fetchUserData();
    }, []);

    const fetchUserData = async () => {
      try {
        const response = await fetch('/user'); // Fetch user data from the server
        if (response.ok) {
          const userDataFromServer = await response.json();
          console.log(userDataFromServer)
          setUserData(userDataFromServer); // Update state with fetched user data
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const handleInputChange = (e) => {
      const { id, value } = e.target;
      setUserData({ ...userData, [id]: value });
    };
  
    const handleSaveChanges = async () => {
      try {
        const response = await fetch('/user', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData), // Send updated user data to the server
        });
  
        if (response.ok) {
          setIsEditing(false); // Exit edit mode after saving
          console.log('User data updated successfully');
        } else {
          console.error('Failed to update user data');
        }
      } catch (error) {
        console.error('Error updating user data:', error);
      }
    };

  return (
    <div className="user-info">
      <div className="input-field">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" className="input-box" value={userData.name} readOnly={!isEditing} onChange={handleInputChange} />
      </div>
      <div className="input-field">
        <label htmlFor="branch">Branch</label>
        <input type="text" id="branch" className="input-box" value={userData.branch} readOnly={!isEditing} onChange={handleInputChange} />
      </div>
      <div className="input-field">
        <label htmlFor="year">Year</label>
        <input type="text" id="year" className="input-box" value={userData.year} readOnly={!isEditing} onChange={handleInputChange} />
      </div>
      <div className="input-field">
        <label htmlFor="mobile">Mobile No</label>
        <input type="text" id="phoneNumber" className="input-box" value={userData.phoneNumber} readOnly={!isEditing} onChange={handleInputChange} />
      </div>
      <div className="action-buttons">
        {!isEditing ? (
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        ) : (
          <button onClick={handleSaveChanges}>Save Changes</button>
        )}
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
