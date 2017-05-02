import { Patient, insert, getAll } from '../models/Patient';

exports.addPatient = (req, res) => {
	let patientDetails = new Patient(req.body);
	insert(patientDetails, (patient) => {
		if (patient) res.send(patient)
		else res.status(500).send('ERROR')	
	})
}

exports.getPatients = (req, res) => {
	let patientDetails = new Patient(req.body);
	getAll((patients) => {
		if (patients) res.send(patients)
		else res.status(500).send('ERROR')
	})
}