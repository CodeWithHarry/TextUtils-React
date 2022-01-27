import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound(props) {
  return (
      <div className="container my-3 py-5 text-center">
          <h2 className="fw-bold" style={{color: props.mode==='dark'?'white':'#042743'}}>404 - Page Not Found</h2>
          <p className="fw-bold" style={{color: props.mode==='dark'?'white':'#042743'}}>Ooooops! It seems that the url/page you requested for doesn't exist on this server.</p>
          <p>
              <Link className="btn btn-danger" to="/">Go to Home</Link>
              <Link className="btn btn-primary ms-1" to="/about">About</Link>
          </p>
      </div>
  );
}
