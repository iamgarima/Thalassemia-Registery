import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize.js';
import '../../assets/styles/main.css';
import { addHospital } from '../actions/hospitals';

class Hospital extends Component {
  handleClick() {
    const hospital = {
      name: this.name.value,
      location: this.location.value
    };
    this.props.addHospital(hospital);
  }

  render() {
    return (
      <div className="row addpatient-container">
        <div className="col s12">
          <h2>Hospital Details</h2>
        </div>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s8">
              <input ref={input => this.name = input} type="text" className="validate" />
              <label>Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
              <input ref={input => this.location = input} type="text" className="validate" />
              <label>Location</label>
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
    addHospital: (hospital) => {
      dispatch(addHospital(hospital))
    }
  }
}

export default connect(null, mapDispatchToProps)(Hospital);