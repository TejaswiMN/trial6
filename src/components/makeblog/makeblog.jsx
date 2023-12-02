import React from 'react';
import "../blog/blog.css";
import { useState } from 'react';
import Blog from '../blog/blog';

const MakeBlog = () => {
    const [inputArray, setInputArray] = useState([]);
    const [currentInput, setCurrentInput] = useState('');
  
    const handleInputChange = (e) => {
      setCurrentInput(e.target.value);
    };
  
    const handleAddInput = () => {
      if (currentInput.trim() !== '') {
        setInputArray([...inputArray, currentInput]);
        setCurrentInput('');
        <Blog Name={inputArray[0]} Year={inputArray[1]} Title={inputArray[2]} Article={inputArray[3]} />
      }
    };

  return (
    <div className="blue-rectangle">
    <div className="info-with-button">
        <div>Name:</div>
          <label htmlFor="name"></label>
          <input placeholder="Enter Name" onChange={handleInputChange}/> 
        <div>Graduating Year:</div>
          <label htmlFor="year"></label>
          <input placeholder="Enter Grad Year" onChange={handleInputChange}/>  
        <div>Title:</div>
          <label htmlFor="title"></label>
          <input placeholder="Enter Title" onChange={handleInputChange}/>     
        <div>Blog Post:</div>
          <label htmlFor="article"></label>
          <input placeholder="Type out your blog post" onChange={handleInputChange}/>
        <button onClick={handleAddInput}>Add</button>
    </div>
  </div>
  );
};

export default MakeBlog;
