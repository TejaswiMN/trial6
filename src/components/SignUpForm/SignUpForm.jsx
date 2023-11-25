import React, { useState } from 'react';
import "./signup.css";
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const navigate = useNavigate();

  // const handleContClick = () => {
  //   navigate('/login');   };

  const [formData, setFormData] = useState({
    username: '',
    branch: '',
    year: '',
    phno: '',
    email: '',
    password: ''  
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate('/login');
      } else {
        // Handle error scenarios
        console.error('Error signing up');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleBackClick = () => {
    navigate('/');   };

  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <form onSubmit={handleSubmit}> 
        <h3>Sign Up </h3>

        <label htmlFor="username">Name</label>
        <input type="text" placeholder="Name" id="username" value={formData.username} onChange={handleInputChange} />
        
        <label htmlFor="username">Branch</label>
        <input type="text" placeholder="Branch" id="branch" value={formData.branch} onChange={handleInputChange} />
        
        <label htmlFor="username">Year of Joining</label>
        <input type="text" placeholder="Year" id="year" value={formData.year} onChange={handleInputChange} />
        
        <label htmlFor="username">Mobile No.</label>
        <input type="text" placeholder="Mobile No." id="phno" value={formData.phno} onChange={handleInputChange} />
        
        <label htmlFor="username">Email ID</label>
        <input type="text" placeholder="Email" id="email" value={formData.email} onChange={handleInputChange} />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" value={formData.password} onChange={handleInputChange} />

        <button onClick={handleBackClick} >Back</button>
        <button type="submit" >Continue</button>
      </form>
    </div>
  );
};


export default SignUpForm;
