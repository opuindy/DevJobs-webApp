import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h4>404</h4>
      <p>page not found</p>
      <Link to='/'>back home</Link>
    </div>
  );
};

export default Error;
