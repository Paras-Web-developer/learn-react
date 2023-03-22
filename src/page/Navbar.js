// import logo from "./logo.svg";
// import React, { useState } from "react";
import PropTypes from "prop-types";

function Nav(props) {
  // const [darkmode, setDarkmode] = useState({
  //   color: "white",
  //   backgroundColor: "#0d6efd",
  //   btnText: "Dark mode Off",
  // });

  // const toggleStyle = () => {
  //   if (darkmode.backgroundColor === "#0d6efd") {
  //     setDarkmode({
  //       color: "white",
  //       backgroundColor: "black",
  //       btnText: "Dark Mode On",
  //       // Dark='Dark Mode on'
  //     });
  //   } else {
  //     setDarkmode({
  //       color: "white",
  //       backgroundColor: "#0d6efd",
  //       btnText: "Dark mode Off",
  //     });
  //   }
  // };

  return (
    <>
      <nav
        className={`bg-${props.mode} d-flex justify-content-evenly align-items-center "
        data-bs-theme="dark`}
      >
        <div className="left">
          <h3 className="text-light">Sunfocus</h3>
        </div>
        <div className="right">
          <ul className="d-flex list-unstyled align-items-center justify-content-center text-white mt-2">
            <li className="mx-3">Home</li>
            <li className="mx-3">Service</li>
            <li className="mx-3">About us</li>
            <li className="mx-3">Contect us</li>
            {/* <button
              className="btn border-2 border-white fw-bold"
              onClick={toggleStyle}
              style={darkmode}
            >
              {darkmode.btnText}
            </button> */}
            <div className="form-check form-switch abs">
              <input
                className="form-check-input mt-2"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.togglemode}
              />
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}
Nav.propTypes = {
  Home: PropTypes.string.isRequired,
};
Nav.defaultProps = {
  Home: "Home2",
};

export default Nav;
