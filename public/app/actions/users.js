import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  USER_PASSWORD_ADDED
} from './types.js';


export const setUser = (user) => {
  return dispatch => {
    axios
      .post('api/v1/join', user)
      .then(res => {
        dispatch({
          type: USER_PASSWORD_ADDED,
          payload: {
            users: res.data
          }
        })
        browserHistory.push(`/patients`);
      })
      .catch(err => {
        alert('Password not added! Something went wrong!!');
      })
  }    
}