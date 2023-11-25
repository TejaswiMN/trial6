import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './profile.css';

const ProfileComp = () => {

  const [userData, setUserData] = useState({
    name: '',
    branch: '',
    year: '',
    mobile: ''
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

  const handleSaveChanges = () => {
    // Send the updated user data to the backend or update session here
    console.log('Updated user data:', userData);
    // You can make an API call to update the user information with the userData
    setIsEditing(false); // Exit edit mode after saving
  };

  return (
    <div className="user-info">
      <div className="input-field">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" className="input-box" value={userData.name} readOnly={!isEditing} onChange={handleInputChange}/>
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
        <input type="text" id="mobile" className="input-box" value={userData.mobile} readOnly={!isEditing} onChange={handleInputChange} />
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

// ProfileComp.propTypes = {
//   name: PropTypes.string.isRequired,
//   branch: PropTypes.string.isRequired,
//   year: PropTypes.string.isRequired,
//   mobile: PropTypes.string.isRequired,
// };

export default ProfileComp;
