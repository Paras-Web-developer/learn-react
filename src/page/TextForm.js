// import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Write a Note !");
  // text = "Hi, Mam";  //This is wrong way to update text.
  // setText("Hi,mam"); // This is correct Way to update.
  const UpperCase = () => {
    let Uppercase = text.toUpperCase();
    setText(Uppercase);
    // let yourText = Uppercase;
    // setText(yourText);
  };
  const lowerCase = () => {
    let lowercase = text.toLowerCase();
    setText(lowercase);
    // let yourText = lowercase;
    // setText(yourText);
  };
  const clear = () => {
    setText("");
  };

  const clickText = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="mb-3 container">
        <h4>{props.heading}</h4>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
          value={text}
          onChange={clickText}
        ></textarea>
        <div className="d-flex flex-row mt-2 justify-content-between ">
          <div>
            <button className="btn btn-primary me-2" onClick={UpperCase}>
              Convert To UpperCase.
            </button>
            <button className="btn btn-outline-primary" onClick={lowerCase}>
              Convert To LowerCase.
            </button>
          </div>
          <div>
            <button className="btn btn-outline-danger" onClick={clear}>
              clear
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p>
          Total Words : {text.split(" ").length - 1} <br />
          Total Characters :{text.length}
          <br />
          {"Required Minutes to read this paragraph :"}
          {0.008 * text.split("").length}
        </p>

        <h1>Here is your Total Paragraph</h1>
        <p style={{ color: "#757575" }}>{text}</p>
      </div>
    </>
  );
}
