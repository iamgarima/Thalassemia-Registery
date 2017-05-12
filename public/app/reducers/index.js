import React from 'react';
import patients from './patients';
import admins from './admins';
import hospitals from './hospitals';
import users from './users';

const reducer = (state = {}, action) => {
  return {
    admins: admins(state.admins, action),
    hospitals: hospitals(state.hospitals, action),
    patients: patients(state.patients, action),
    users: users(state.patients, action)
  }
}

export default reducer; 