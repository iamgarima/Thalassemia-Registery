import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  ADMIN_ADDED
} from './types.js';


export const addAdmin = (admin) => {
  return dispatch => {
    axios
      .post('api/v1/register/admin', admin)
      .then(res => {
        dispatch({
          type: ADMIN_ADDED,
          payload: {
            admin: res.data
          }
        })
        browserHistory.push(`/hospital`);
      })
      .catch(err => {
        alert('Admin not added! Something went wrong!!');
      })
  }    
}