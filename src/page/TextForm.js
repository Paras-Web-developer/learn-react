import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Write a Note !");
  // text = "Hi, Mam";  //This is wrong way to update text.
  // setText("Hi,mam"); // This is correct Way to update.
  const click = () => {
    let newText = text.toUpperCase();
    setText(newText);
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
          rows="8"
          value={text}
          onChange={clickText}
        ></textarea>
        <button className="btn btn-primary mt-3" onClick={click}>
          Convert To UpperCase.
        </button>
      </div>
    </>
  );
}
