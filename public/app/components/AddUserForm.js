import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize.js';
import '../../assets/styles/main.css';

class AddUserForm extends Component {
  handleClick() {
    const user = {
      emailId: this.emailId.value,
    };
    this.props.addUser(user);
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
              <input ref={input => this.emailId = input} type="text" className="validate" />
              <label>Email Id</label>
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
    addUser: (user) => {
      //dispatch()
    }
  }
}

export default connect(null, mapDispatchToProps)(AddUserForm);