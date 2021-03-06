import React, { Component } from 'react';
import { Link } from 'react-router';
import 'materialize-css/bin/materialize.css';
import '../../assets/styles/main.css';

class Header extends Component {
  render() {
    return (
      <div className="row header-row">
        <div className="col s10 header-col">
          <div className="row">
            <Link to={`/addpatient`}>
              <div className="col s1">
                <i className="material-icons">add</i>
              </div>
              <div className="col s9 text-container">
                <span className="add-text">ADD</span>
                <span className="patient-text"> Patient</span>
              </div>
            </Link>
            <div className="col s12 sub-heading">
              <p>You can add patients sufferring from thalassemia to provide them easy access of blood.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header