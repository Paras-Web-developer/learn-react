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
  const extraSpace = () => {
    const removeSpace = document.getElementById(
      "exampleFormControlTextarea1"
    ).value;
    let copy =removeSpace.split(/[ ]+/);
    setText(copy.join(" "));
    console.log(removeSpace);
  };
  // const extraSpace = () => {
  //   let newText = text.split(/[ ]+/);
  //   setText(newText.join());
  // };

  const clickText = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className={`mb-3 container text-${props.mode==='primary'?'primary':'white'}`}>
        <h4>Enter Your Text </h4>
        <textarea
          className={`form-control bg-${props.mode==='primary'?'light':'dark'} text-${props.mode==='primary'?'dark':'light'}`}
          id="exampleFormControlTextarea1"
          rows="5"
          value={text}
          onChange={clickText}

        ></textarea>
        <div className="d-flex flex-row mt-2 justify-content-between ">
          <div>
            <button className="btn btn-primary m-2" onClick={UpperCase}>
              Convert To UpperCase.
            </button>
            <button
              className="btn btn-outline-primary m-2"
              onClick={lowerCase}
            >
              Convert To LowerCase.
            </button>
            <button className="btn btn-outline-primary m-2" onClick={extraSpace}>
              Remove Extra Spaces
            </button>
          </div>
          <div>
            <button className="btn btn-outline-danger m-2" onClick={clear}>
              clear
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="text-primary">Your text summary</h2>
        {/* <h2 className="text-primary">Your Text summary</h2> */}
        <p className={`text-${props.mode==='primary'?'dark':'light'}`}>
          Total Words : {text.split(" ").length - 1} <br />
          Total Characters :{text.length}
          <br />
          {"Required Minutes to read this paragraph :"}
          {0.008 * text.split("").length}
        </p>

        <h1 className="text-primary">Here is your Total Paragraph</h1>
        <p className={`text-${props.mode==='primary'?'dark':'light'}`}>{text}</p>
      </div>
    </>
  );
}
