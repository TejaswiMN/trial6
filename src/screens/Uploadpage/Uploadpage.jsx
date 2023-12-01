import axios from "axios";
import './Uploadpage.css'; // Assume you have a CSS file for the new page
import React, { useEffect, useState } from "react"; 
function Uploadpage() {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
  
    const submitImageFunction = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append("title", title);
      formData.append("file", file);
      console.log(title, file);
        const result = await axios.post(
          "http://localhost:3000/upload-files",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        //console.log(result);
      };
  return (
    <div className="App">
      <form className="formStyle" onSubmit={submitImageFunction}>
        <br />
        <h4>Upload pdf</h4>
        <input type="text" className="form-control" placeholder="Title" required onChange={(e) => setTitle(e.target.value)}/>
        <input type="file" className="form-control" accept="application/pdf" required onChange={(e) => setFile(e.target.files[0])}/>
        <br />
        <button class="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Uploadpage;
