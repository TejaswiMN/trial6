import React from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/home');   };
  const handleBackClick = () => {
    navigate('/');   };

  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <form>
        <h3>Login </h3>

        <label htmlFor="username">Name</label>
        <input type="text" placeholder="Name" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button onClick={handleBackClick} >Back</button>
        <button onClick={handleLoginClick} >Log In</button>
      </form>
    </div>
  );
}

export default Login;
