import React from "react";

export default function About({ title }) {
  // Changing title
  document.title = title;

  return (
    <div className="container my-3">
      <h1>About</h1>
      <hr />
      <p>This is a simple textutils website made in react.</p>
    </div>
  );
}
