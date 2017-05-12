import React, { Component } from 'react';
import { Link } from 'react-router';
import 'materialize-css/bin/materialize.css';
import '../../assets/styles/main.css';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to={`/patients`} className="nav-button">Patients</Link>
            </li>
            <li>
              <Link to={`/users`} className="nav-button">Users</Link>
            </li>
            <li>
              <Link to={`/thalassemia_registry`} className="nav-button">Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;