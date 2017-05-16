import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize.js';
import '../../assets/styles/main.css';
import { addPatient } from '../actions/patients';
import { emptyFieldCheck } from '../../../dist/validations.js';

class AddPatientForm extends Component {
  handleClick() {
    const patient = {
      fullName: this.fullName.value,
      dob: this.dob.value,
      bloodType: this.bloodType.value
    };
    emptyFieldCheck(patient) ? this.props.addPatient(patient) : alert("Invalid input!!");
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
              <input ref={input => this.bloodType = input} type="text" className="validate" />
              <label>Blood Type</label>
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