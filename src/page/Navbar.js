// import logo from "./logo.svg";
import React from "react";
import PropTypes from "prop-types";

function Nav(props) {
  return (
    <>
      <nav
        className="bg-primary d-flex justify-content-evenly align-items-center "
        data-bs-theme="dark"
      >
        <div className="left">
          <h3>Sunfocus</h3>
        </div>
        <div className="right">
          <ul className="d-flex list-unstyled align-items-center justify-content-center text-white mt-2">
            <li className="mx-3">{props.Home}</li>
            <li className="mx-3">Service</li>
            <li className="mx-3">About us</li>
            <li className="mx-3">Contect us</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
Nav.propTypes = {
  Home: PropTypes.string.isRequired,
};
Nav.defaultProps ={
  Home: "Home2"
}

export default Nav;
