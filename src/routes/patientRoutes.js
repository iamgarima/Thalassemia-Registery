import patients from '../controllers/patientController'

const patientRoutes = router => {
	router
	  .route('/patients')
	  .post(patients.addPatient)
	  .get(patients.getPatients)
}

export default patientRoutes;

