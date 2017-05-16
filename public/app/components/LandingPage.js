import React from 'react';
import { Link } from 'react-router';
import 'materialize-css/bin/materialize.css';
import '../../assets/styles/main.css';

const LandingPage = () => {
  return (
    <div className="outer-image-container">
      <div className="active-container">
        <h5>Thalassemia Registry</h5>
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
    </div>
  )
}

export default LandingPage;