import {
  PATIENTS_AVAILABLE
} from '../actions/types';

const INITIAL_STATE = [];

const patients = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case PATIENTS_AVAILABLE:
      return [...action.payload.patients]
    default:
      return state;  
  }
};

export default patients;