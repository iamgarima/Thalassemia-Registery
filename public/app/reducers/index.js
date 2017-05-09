import React from 'react';
import patients from './patients';
import admins from './admins';

const reducer = (state = {}, action) => {
  return {
    admins: admins(state.admins, action),
    patients: patients(state.patients, action)
  }
}

export default reducer; 