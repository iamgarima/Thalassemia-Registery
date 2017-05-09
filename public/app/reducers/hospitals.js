import {
  HOSPITAL_ADDED
} from '../actions/types';

const INITIAL_STATE = [];

const hospitals = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case HOSPITAL_ADDED:
      return [...state, action.payload.hospital]  
    default:
      return state;  
  }
};

export default hospitals;