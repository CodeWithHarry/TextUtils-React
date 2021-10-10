import React from "react";

export default function Form({ theme, showAlert, text, setText, title }) {
  // Changing title
  document.title = title;

  // Handling onChnage textarea event
  const handleChangeText = (e) => setText(e.target.value);

  // Function to change into uppercase
  const handleUpCase = () => {
    setText(text.toUpperCase());
    text === ""
      ? showAlert("danger", "Enter something to convert")
      : showAlert("success", "Converted to upper case");
  };

  // Function to change into lowercase
  const handleLowCase = () => {
    setText(text.toLowerCase());
    text === ""
      ? showAlert("danger", "Enter something to convert")
      : showAlert("success", "Converted to lower case");
  };

  // Function to clear text
  const handleClearText = () => {
    setText("");
    text === ""
      ? showAlert("danger", "Enter something to clear")
      : showAlert("success", "Text cleared");
  };

  // Function to copy text
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    text === ""
      ? showAlert("danger", "Enter something to copy")
      : showAlert("success", "Text copied");
  };

  // Function to remove extra-spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ").trim();
    newText === text
      ? showAlert("danger", "No white spaces")
      : showAlert("success", "White space removed");
    setText(newText);
  };

  return (
    <div className="container my-3">
      <div className="mb-3">
        <label htmlFor="myText" className="form-label">
          Enter Text here
        </label>
        <textarea
          value={text}
          onChange={handleChangeText}
          className="form-control"
          id="myText"
          rows="7"
          placeholder="Enter here"
          style={{ backgroundColor: theme.bg, color: theme.fg }}
        ></textarea>
      </div>
      <button onClick={handleUpCase} className="m-2 btn btn-outline-primary">
        Upper Case
      </button>
      <button onClick={handleLowCase} className="m-2 btn btn-outline-primary">
        Lower Case
      </button>
      <button onClick={handleClearText} className="m-2 btn btn-outline-primary">
        Clear Text
      </button>
      <button onClick={handleCopyText} className="m-2 btn btn-outline-primary">
        Copy Text
      </button>
      <button
        onClick={handleExtraSpaces}
        className="m-2 btn btn-outline-primary"
      >
        Remove White-spaces
      </button>
      <div className="mb-3">
        <h2>Summary</h2>
        <hr />
        <p>
          {`${text.split(/\s+/).filter((t) => t !== "").length} words & ${
            text.length
          } letters`}
        </p>
        <p>{`${text.length / 10} seconds required to read`}</p>
      </div>
      <div className="mb-3">
        <h2>Preview</h2>
        <hr />
        <p>{text === "" ? "Preview will appear here" : text}</p>
      </div>
    </div>
  );
}
