// import logo from "./logo.svg";
import "./App.css";
import Nav from "./page/Navbar";
import Home from "./page/home";
import TextForm from "./page/TextForm";
import { useState } from "react";
function App() {
  // navbar
  const [mode, setMode] = useState("primary");
  const togglemode = () => {
    if (mode === "primary") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("primary");
      document.body.style.backgroundColor = "white";
    }
  };
  // home

  return (
    <>
      <Nav togglemode={togglemode} mode={mode} />
      <Home />
      <TextForm mode={mode} />
    </>
  );
}

export default App;
