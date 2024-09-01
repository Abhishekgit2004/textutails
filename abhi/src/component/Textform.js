import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default function Textform(props) {
  const [text, setText] = useState("");

  // Function to handle uppercase conversion
  const handleUppercase = () => {
    if (text === "") {
      props.showAlert("Please enter some text.", "danger");
      return;
    }
    let upperText = text.toUpperCase();
    setText(upperText);
    props.showAlert("Converted to uppercase.", "success");
  };

  // Function to handle lowercase conversion
  const handleLowercase = () => {
    if (text === "") {
      props.showAlert("Please enter some text.", "danger");
      return;
    }
    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.showAlert("Converted to lowercase.", "success");
  };

  // Function to clear the text
  const handleClear = () => {
    if (text === "") {
      props.showAlert("Nothing to clear.", "danger");
      return;
    }
    setText("");
    props.showAlert("Text cleared.", "success");
  };

  // Function to handle text change
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // Function to speak the text
  const handleSpeak = () => {
    if (text === "") {
      props.showAlert("Please enter some text.", "danger");
      return;
    }
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking text...", "success");
  };

  // Function to stop the speech
  const handleStop = () => {
    if (text === "") {
      props.showAlert("Nothing to stop.", "danger");
      return;
    }
    window.speechSynthesis.cancel();
  };

  // Calculate word count and reading time
  const wordCount = text.split(/\s+/).filter(Boolean).length; // Handles multiple spaces
  const readingTime = (0.008 * wordCount).toFixed(2);

  return (
    <>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          placeholder="Enter text here"
          className="form-control"
          value={text}
          onChange={handleChange}
          id="exampleFormControlTextarea1"
          rows="8"
          style={{
            backgroundColor: props.mode === 'dark' ? 'black' : 'white',
            color: props.mode === 'dark' ? 'cyan' : 'black'
          }}
        ></textarea>
        <div className="mt-2">
          <button type="button" className="btn btn-primary mx-2 my-1 border border-black" onClick={handleUppercase}>Convert to Uppercase</button>
          <button type="button" className="btn btn-primary mx-2 my-1 border border-black" onClick={handleLowercase}>Convert to Lowercase</button>
          <button type="button" className="btn btn-primary mx-2 my-1 border border-black" onClick={handleClear}>Clear</button>
          <button type="button" className="btn btn-warning mx-2 my-1 border border-black" onClick={handleSpeak}>Speak</button>
          <button type="button" className="btn btn-danger mx-2 my-1 border border-black" onClick={handleStop}>Stop</button>
        </div>
      </div>
      <div className="abhi mt-3">
        <h1>Text Analysis</h1>
        <p>{text.split(" ").length} ward and{text.length} Characters</p>
        <p>Characters: {text.length}</p>
        <p>Estimated Reading Time: {readingTime} minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
