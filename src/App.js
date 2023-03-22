// import logo from "./logo.svg";
import "./App.css";
import Nav from "./page/Navbar";
import Home from "./page/home";
import TextForm from "./page/TextForm";
import { useState } from "react";
import Alert from "./page/Alert";
function App() {
  // Alert javascript
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  };
  // navbar
  const [mode, setMode] = useState("primary");
  const togglemode = () => {
    if (mode === "primary") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Success", "Dark Mode has been enables");

    } else {
      setMode("primary");
      document.body.style.backgroundColor = "white";
      showAlert("Success", "Light Mode has been enables");
      
    }
  };

  return (
    <>
      <Nav togglemode={togglemode} mode={mode} />
      <Alert alert={alert} mode={mode}/>
      <Home />
      <TextForm showAlert={showAlert} mode={mode} />
    </>
  );
}

export default App;
