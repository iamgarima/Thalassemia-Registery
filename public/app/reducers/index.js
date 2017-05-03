import React from 'react';
import patients from './patients';

const reducer = (state = {}, action) => {
  return {
    patients: patients(state.patients, action)
  }
}

export default reducer; 