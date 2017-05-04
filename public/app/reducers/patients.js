import {
  PATIENTS_AVAILABLE,
  PATIENT_ADDED
} from '../actions/types';

const INITIAL_STATE = [];

const patients = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case PATIENTS_AVAILABLE:
      return [...action.payload.patients]
    case PATIENT_ADDED:
      return [...state, action.payload.patient]  
    default:
      return state;  
  }
};

export default patients;