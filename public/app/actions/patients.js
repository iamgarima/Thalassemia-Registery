import axios from 'axios';
import {
  PATIENTS_AVAILABLE,
  PATIENT_ADDED
} from './types';
import { browserHistory } from 'react-router';

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

export const addPatient = (patient) => {
  return dispatch => {
    axios
    .post(`/api/v1/patients`, patient)
    .then(res => {
      dispatch({
        type: PATIENT_ADDED,
        payload: {
          patient: res.data
        } 
      })
      browserHistory.push('/patients');
    })
    .catch(err => {
      alert('Request failed!!');
    })
  }
}