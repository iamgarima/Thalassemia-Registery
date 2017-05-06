import { tables } from '../db/database';

function Patient(patientDetails) {
	this.userEmailId = patientDetails.userEmailId;
	this.fullName = patientDetails.fullName;
	this.dob = patientDetails.dob;
	this.diseaseType = patientDetails.diseaseType;
}

const insert = (patient, cb) => {
	tables.Patient
	  .sync({force: false})
	  .then(() => tables.Patient.create(patient).then((patient) => {
	  	cb(patient);
	  }))
}

const getAll = (userEmailId, cb) => {
  tables.Patient
    .sync({force: false})
    .then(() => tables.Patient.findAll({
      where: {
        userEmailId: userEmailId 
      }
    }).then((patients) => {
      cb(patients);
    }))
} 

module.exports = {
	Patient,
	insert,
	getAll
};