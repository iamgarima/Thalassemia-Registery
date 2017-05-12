import {
  USERS_AVAILABLE,
  USER_ADDED
} from '../actions/types';

const INITIAL_STATE = [];

const users = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case USERS_AVAILABLE:
      return [...action.payload.users]
    case USER_ADDED:
      return [...state, action.payload.user]    
    default:
      return state;  
  }
};

export default users;