import React, { Component } from 'react';
import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize.js';
import '../../assets/styles/main.css';

class AddPatientForm extends Component {
  render() {
    return (
      <div className="row addpatient-container">
        <div className="col s12">
          <h2>Details</h2>
        </div>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s8">
              <input id="full_name" type="text" className="validate" />
              <label for="full_name">Full Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
              <input id="date_of_birth" type="text" className="validate" />
              <label for="date_of_birth">Date of birth</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
              <input id="disease_type" type="text" className="validate" />
              <label for="disease_type">Disease Type</label>
            </div>
          </div>
        </form>
        <div className="col s12">
          <a className="waves-effect waves-light btn">Submit</a>
        </div>
      </div>          
    )
  }
}

export default AddPatientForm;