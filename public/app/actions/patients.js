import axios from 'axios';
import {
  PATIENTS_AVAILABLE
} from './types';

export const getPatients = () => {
  return dispatch => {
    axios
    .get(`/api/v1/patients`)
    .then(res => {
      dispatch({
        type: PATIENTS_AVAILABLE,
        payload: {
          patients: res.data
        }
      })
    })
    .catch(err => {
      alert('Request failed!!');
    })
  }
}