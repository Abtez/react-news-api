import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return(
        <div
          className="bg-image d-flex justify-content-center align-items-center">

        <Link to="/" className="btn">
          <h1 className="error">Home Page</h1>
          </Link>
        </div>
            
    );
};

export default Error;