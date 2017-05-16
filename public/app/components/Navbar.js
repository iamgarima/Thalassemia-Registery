import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import 'materialize-css/bin/materialize.css';
import '../../assets/styles/main.css';

class Navbar extends Component {
  renderUser() {
    if(this.props.loginUser.isAdmin) {
      return (
        <li>
          <Link to={`/users`} className="nav-button">Users</Link>
        </li>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to={`/patients`} className="nav-button">Patients</Link>
            </li>
            { this.renderUser() }
            <li>
              <Link to={`/thalassemia_registry`} className="nav-button">Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loginUser: state.users
  }
}

export default connect(mapStateToProps, null)(Navbar);