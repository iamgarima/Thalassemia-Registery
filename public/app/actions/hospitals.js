import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  HOSPITAL_ADDED
} from './types.js';


export const addHospital = (hospital) => {
  return dispatch => {
    axios
      .post('api/v1/register/hospital', hospital)
      .then(res => {
        dispatch({
          type: HOSPITAL_ADDED,
          payload: {
            hospital: res.data
          }
        })
        browserHistory.push(`/patients`);
      })
      .catch(err => {
        alert('Hospital not added! Something went wrong!!');
      })
  }    
}