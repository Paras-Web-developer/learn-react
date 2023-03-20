// import logo from "./logo.svg";
import "./App.css";
import Nav from "./page/Navbar";
import Home from "./page/home";
import TextForm from "./page/TextForm";
function App() {
  return (
    <>
      <Nav/>
      <Home />
      <TextForm heading="Enter Your Text"/>
    </>
  );
}

export default App;
