import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'; 
import Navbar from './Navbar';
import 'materialize-css/bin/materialize.css';
import '../../assets/styles/main.css';
import { getUsers } from '../actions/users';

class UserList extends Component {

  componentWillMount() {
    this.props.getUsers();
  }

  renderUsers() {
    return this.props.users.map((user) => {
      return (
        <div className="row content-row">
          <ul>
            <li className="col s12">{user.emailId}</li>
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
          <div className="row header-row">
            <div className="col s10 header-col">
              <div className="row">
                <Link to={`/adduser`}>
                  <div className="col s1">
                    <i className="material-icons">add</i>
                  </div>
                  <div className="col s9 text-container">
                    <span className="add-text">ADD</span>
                    <span className="patient-text"> User</span>
                  </div>
                </Link>
                <div className="col s12 sub-heading">
                  <p>You can add users who should have the access to add the patients.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row data-container">
            <div className="col s6">
              <div className="row field-row">
                <ul>
                  <li className="col s12">Email Id</li>
                </ul>
              </div> 
              { this.renderUsers() }   
            </div>
          </div>  
        </div>
      </div>    
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
      dispatch(getUsers());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);