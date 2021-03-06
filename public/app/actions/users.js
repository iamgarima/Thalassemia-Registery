import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  USER_PASSWORD_ADDED,
  USERS_AVAILABLE,
  USER_ADDED
} from './types.js';

export const setUser = (user) => {
  return dispatch => {
    axios
      .post('api/v1/join', user)
      .then(res => {
        axios.defaults.headers.common['Authorization'] = 'JWT ' + res.data;
        browserHistory.push(`/patients`);
      })
      .catch(err => {
        alert('Password not added! Something went wrong!!');
      })
  }    
}

export const getUsers = () => {
  return dispatch => {
    axios
    .get(`/api/v1/users`)
    .then(res => {
      dispatch({
        type: USERS_AVAILABLE,
        payload: {
          users: res.data
        }
      })
    })
    .catch(err => {
      alert('Request failed!!');
    })
  }
}

export const addUser = (user) => {
  return dispatch => {
    axios
    .post(`/api/v1/users`, user)
    .then(res => {
      dispatch({
        type: USER_ADDED,
        payload: {
          user: res.data
        } 
      })
      browserHistory.push('/users');
    })
    .catch(err => {
      alert('Request failed!!');
    })
  }
}