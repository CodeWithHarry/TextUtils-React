import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Alert from "./components/Alert";
import About from "./components/About";

function App() {
  // Theme states
  const [theme, setTheme] = useState(
    sessionStorage.getItem("theme") == null
      ? {
          nav: "#eef3f3",
          nav_fg: "light",
          bg: "#ffffff",
          fg: "black",
        }
      : JSON.parse(sessionStorage.theme)
  );

  // Color state
  const [color, setColor] = useState(theme.bg);

  // Alert states
  const [alert, setAlert] = useState(null);

  // Text states
  const [text, setText] = useState("");

  // Function to show alerts
  const showAlert = (type, msg) => {
    setAlert({ type: type, msg: msg });
    if (localStorage["timeout"] != null) clearTimeout(localStorage["timeout"]);
    let s = setTimeout(() => {
      setAlert(null);
    }, 2000);
    localStorage["timeout"] = s;
  };

  // Function to append style
  const appendStyle = (themeObj) => {
    var styleElement = document.getElementById("styles_js");
    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.type = "text/css";
      styleElement.id = "styles_js";
      document.getElementsByTagName("head")[0].appendChild(styleElement);
    }
    styleElement.appendChild(
      document.createTextNode(
        `body {background-color: ${themeObj.bg} !important;}`
      )
    );
    styleElement.appendChild(
      document.createTextNode(`body {color: ${themeObj.fg} !important;}`)
    );
    styleElement.appendChild(
      document.createTextNode(
        `#navbar {background-color: ${themeObj.nav} !important;}`
      )
    );
    styleElement.appendChild(
      document.createTextNode(
        `.btn {color: ${themeObj.fg} !important; border: 1px solid ${themeObj.fg} !important;}`
      )
    );
    styleElement.appendChild(
      document.createTextNode(
        `.btn:hover {background-color: ${themeObj.nav} !important; border: 1px solid ${themeObj.nav} !important;}`
      )
    );
  };
  appendStyle(theme);

  // Function to check darkness of background
  function checkDark(hexcolor) {
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness >= 128 ? "black" : "white";
  }

  // Function to change theme
  const changeTheme = (colorInp) => {
    let textColor = checkDark(colorInp);

    let themeObj = {
      nav: colorInp,
      nav_fg: textColor === "white" ? "dark" : "light",
      bg: colorInp + "e0",
      fg: textColor,
    };

    setTheme(themeObj);
    appendStyle(themeObj);
    sessionStorage.setItem("theme", JSON.stringify(themeObj));
  };

  // Function to change color
  const changeColor = (colorInp) => {
    setColor(colorInp);
    changeTheme(colorInp);
  };

  return (
    <Router>
      <Navbar
        title="TextUtils"
        theme={theme}
        toggle={changeTheme}
        color={color}
        changeColor={changeColor}
      />
      <Alert alert={alert} />
      <Switch>
        <Route exact path="/about">
          <About title="About" />
        </Route>
        <Route exact path="/">
          <Form
            title="TextUtils"
            theme={theme}
            showAlert={showAlert}
            text={text}
            setText={setText}
          />
        </Route>
        <Route path="/">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
