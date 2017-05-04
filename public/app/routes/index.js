import React from 'react';
import {
	Router,
	Route,
  IndexRedirect,
  browserHistory
} from 'react-router';
import App from '../components/App';
import PatientList from '../components/PatientList';
import AddPatientForm from '../components/AddPatientForm';


const Routes = () => {
	return (
    <Router history={browserHistory}> 
		  <Route path="/" component={App}>
        <IndexRedirect to="/patients" />
        <Route path="patients" component={PatientList} />
        <Route path="addpatient" component={AddPatientForm} />
      </Route>
    </Router>
	)
}

export default Routes;