import React, { useState } from "react";
import "./../index.css";
let convertedTxt = " ";
// const txtArea = document.getElementById("Input");
function InputBox() {
  const [txt, setTxt] = useState(" ");
  const changed = (e) => {
    convertedTxt = txt;
    setTxt(e.target.value);
  };
  const covtToUpper = () => {
    console.log("converted");
    convertedTxt = txt.toUpperCase();
    setTxt(convertedTxt);
  };
  const covtToLower = () => {
    convertedTxt = txt.toLowerCase();
    // txtArea.value = convertedTxt;
    setTxt(convertedTxt);
  };
  const covtEmpty = () => {
    setTxt("");
  };
  return (
    <>
      <div className="box-c">
        <div className="box">
          <h1>Enter You Text To Analyze !</h1>
          <textarea
            name="input"
            value={txt}
            onChange={changed}
            id="Input"
            placeholder="Enter your txt here !"
            rows="10"
          ></textarea>
          <div className="btns">
            <button
              type="button"
              onClick={covtToUpper}
              className="btn btn-primary"
            >
              Convert to Uppercase
            </button>
            <button
              type="button"
              onClick={covtToLower}
              className="btn btn-success"
            >
              Convert to Lowercase
            </button>
            <button
              type="button"
              onClick={covtEmpty}
              className="btn btn-danger"
            >
              Clear Text
            </button>
          </div>
        </div>
        <div className="box-2">
          <h2>Your text summary</h2>
          <div className="data">
            <b>{txt.length} character </b>
            <b> {txt.split(" ").length} words</b>
          </div>
          <b> {0.008 * txt.split(" ").length} minutes to read</b>
        </div>
        <div className="box-3">
          <h2>Preview</h2>
          <p>{txt.length > 0 ? txt : "Enter some text to perview it !!!"}</p>
        </div>
      </div>
    </>
  );
}

export default InputBox;
