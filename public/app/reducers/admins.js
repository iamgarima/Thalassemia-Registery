import {
  ADMIN_ADDED
} from '../actions/types';

const INITIAL_STATE = [];

const admins = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADMIN_ADDED:
      return [...state, action.payload.admin]  
    default:
      return state;  
  }
};

export default admins;