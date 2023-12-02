
// import './Uploadpage.css'; // Assume you have a CSS file for the new page
import React from "react";
import { createRef } from "react";
import DocViewer, {DocViewerRenderers} from "react-doc-viewer";


function Uploadpage() {
    const fileInput = createRef();


    const submitImageFunction = async (e) => {
      e.preventDefault();
      console.log(fileInput.current.files);
      const formData = new FormData();
      formData.set("avatar", fileInput.current.files[0]);


      try {
            const response = await fetch('/profile', {
                method: 'POST',
                body: formData

            });
            const parsedResponse = await response.json();
            if(response.ok) {
                
            } else {
                console.error("Error uploading");
            }
        }
        catch (e) {
            console.error(e.message);
        }
    }
  return (
    <div className="App">
      <form className="formStyle" onSubmit={submitImageFunction}>
        <br />
        <h4>Upload pdf</h4>
        <input type="text" className="form-control" placeholder="Title" required />
        <input type="file" name="avatar" ref={fileInput} className="form-control" accept="application/pdf" required />
        <br />
        <button class="btn btn-primary" type="submit">
          Submit
        </button>
      </form> 
    </div>
  );
};

export default Uploadpage;
