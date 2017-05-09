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
import LandingPage from '../components/LandingPage';
import Admin from '../components/Admin';
import Hospital from '../components/Hospital';
import Join from '../components/Join';
import Login from '../components/Login';


const Routes = () => {
	return (
    <Router history={browserHistory}> 
		  <Route path="/" component={App}>
        <IndexRedirect to="/thalassemia_registry" />
        <Route path="thalassemia_registry" component={LandingPage} /> 
        <Route path="admin" component={Admin} />
        <Route path="hospital" component={Hospital} />
        <Route path="join" component={Join} />
        <Route path="login" component={Login} />
        <Route path="patients" component={PatientList} />
        <Route path="addpatient" component={AddPatientForm} />
      </Route>
    </Router>
	)
}

export default Routes;