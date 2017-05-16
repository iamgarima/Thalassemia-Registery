import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPatients } from '../actions/patients';
import Header from './Header';
import Navbar from './Navbar';
import 'materialize-css/bin/materialize.css';
import '../../assets/styles/main.css';

class PatientList extends Component {

  componentWillMount() {
    this.props.getPatients();
  }

  renderPatients() {
    return this.props.patients.map((patient) => {
      return (
        <div className="row content-row">
          <ul>
            <li className="col s1">{patient.id}</li>
            <li className="col s5">{patient.fullName}</li>
            <li className="col s4">{patient.dob}</li>
            <li className="col s2">{patient.bloodType}</li>
          </ul>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <Navbar />
          <Header />
          <div className="row data-container">
            <div className="col s10">
              <div className="row field-row">
                <ul>
                  <li className="col s1"></li>
                  <li className="col s5">Name</li>
                  <li className="col s4">D.O.B</li>
                  <li className="col s2">Blood Type</li>
                </ul>
              </div>
              { this.renderPatients() }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    patients: state.patients
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPatients: () => {
      dispatch(getPatients());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientList);
