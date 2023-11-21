import React from 'react';
import "./signup.css";
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const navigate = useNavigate();

  const handleContClick = () => {
    navigate('/login');   };
  const handleBackClick = () => {
    navigate('/');   };

  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <form>
        <h3>Sign Up </h3>

        <label htmlFor="username">Name</label>
        <input type="text" placeholder="Name" id="username" />
        
        <label htmlFor="username">Branch</label>
        <input type="text" placeholder="Branch" id="branch" />
        
        <label htmlFor="username">Year of Joining</label>
        <input type="text" placeholder="Year" id="year" />
        
        <label htmlFor="username">Mobile No.</label>
        <input type="text" placeholder="Mobile No." id="phno" />
        
        <label htmlFor="username">Email ID</label>
        <input type="text" placeholder="Email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button onClick={handleBackClick} >Back</button>
        <button onClick={handleContClick} >Continue</button>
      </form>
    </div>
  );
};


export default SignUpForm;
