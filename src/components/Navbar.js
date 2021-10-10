import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  // Function to handle color
  const handleColor = () => {
    let colorInput = document.getElementById("themeColor");
    props.changeColor(colorInput.value);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.theme.nav_fg} bg-${props.theme.nav_fg}`}
      id="navbar"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              type="color"
              id="themeColor"
              name="themeColor"
              onChange={handleColor}
              value={props.color}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Theme
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Describing types of props passed from app.js
Navbar.propTypes = { title: PropTypes.string.isRequired };

// Defining default props if not given
Navbar.defaultProps = { title: "Title Here" };
