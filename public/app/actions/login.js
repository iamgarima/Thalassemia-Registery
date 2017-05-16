import axios from 'axios';
import {
  LOGIN_RESPONSE,
  LOGIN_USER
} from './types';
import { browserHistory } from 'react-router';

export const loginUser = (user) => {
  return dispatch => {
    axios
    .post(`/api/v1/login`, user)
    .then(res => {
      dispatch({
        type: LOGIN_RESPONSE,
        payload: {
          patients: res.data.patients
        }
      })

      dispatch({
        type: LOGIN_USER,
        payload: {
          user: res.data.loginUser
        }
      })
      axios.defaults.headers.common['Authorization'] = 'JWT ' + res.data.userToken;
      browserHistory.push(`/patients`);
    })
    .catch(err => {
      alert('Request failed!!');
    })
  }
}
