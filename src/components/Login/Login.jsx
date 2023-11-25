import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleLoginClick = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.username, // Assuming 'username' field represents email
          password: formData.password
        }),
      });

      if (response.ok) {
        const userData = await response.json();
        localStorage.setItem('user', JSON.stringify(userData.user));
        navigate('/home');
      } else {
        // Handle login failure
        console.error('Login failed');
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
      <form onSubmit={handleLoginClick}>
        <h3>Login </h3>

        <label htmlFor="username">Name</label>
        <input type="text" placeholder="Name" id="username" value={FormData.username} onChange={handleInputChange}/>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" value={FormData.password} onChange={handleInputChange}/>

        <button onClick={handleBackClick} >Back</button>
        <button type='submit' >Log In</button>
      </form>
    </div>
  );
}

export default Login;
