import React from 'react';
import { Link } from 'react-router';

const LandingPage = () => {
  return (
    <div>
      <Link to={`/admin`}>
        <p>Register Yourself</p>
      </Link>
      <Link to={`/join`}>
        <p>Join Hospital</p>
      </Link>
      <Link to={`/login`}>
        <p>Login</p>
      </Link>
    </div>  
  )
}

export default LandingPage;