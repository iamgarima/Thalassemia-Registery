import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize.js';
import '../../assets/styles/main.css';
import { addPatient } from '../actions/patients';

class AddPatientForm extends Component {
  handleClick() {
    const patient = {
      fullName: this.fullName.value,
      dob: this.dob.value,
      diseaseType: this.diseaseType.value
    };
    this.props.addPatient(patient);
  }

  render() {
    return (
      <div className="row addpatient-container">
        <div className="col s12">
          <h2>Details</h2>
        </div>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s8">
              <input ref={input => this.fullName = input} type="text" className="validate" />
              <label>Full Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
              <input ref={input => this.dob = input} type="text" className="validate" />
              <label>Date of birth</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
              <input ref={input => this.diseaseType = input} type="text" className="validate" />
              <label>Disease Type</label>
            </div>
          </div>
        </form>
        <div className="col s12">
          <button className="waves-effect waves-light btn" onClick={() => this.handleClick()}>Submit</button>
        </div>
      </div>          
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPatient: (patient) => {
      dispatch(addPatient(patient))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddPatientForm);