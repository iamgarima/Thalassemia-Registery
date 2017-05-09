import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize.js';
import '../../assets/styles/main.css';

class Login extends Component {
  handleClick() {
    const user = {
      emailId: this.emailId.value,
      password: this.password.value
    }
  }

  render() {
    return (
      <div className="row addpatient-container">
        <div className="col s12">
          <h2>Login</h2>
        </div>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s8">
              <input ref={input => this.emailId = input} type="text" className="validate" />
              <label>Email id</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
              <input ref={input => this.password = input} type="password" className="validate" />
              <label>Password</label>
            </div>
          </div>
        </form>
        <div className="col s12">
          <button className="waves-effect waves-light btn" onClick={() => this.handleClick()}>Login</button>
        </div>
      </div>            
    )
  }
}  

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (user) => {
      dispatch()
    }
  }
}

export default connect(null, mapDispatchToProps)(Login);