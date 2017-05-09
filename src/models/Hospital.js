import { tables } from '../db/database';

function Hospital(hospitalDetails) {
  this.name = hospitalDetails.name;
  this.location = hospitalDetails.location;
  this.patientsList = hospitalDetails.patientsList;
}

const insert = (hospital, cb) => {
  tables.Hospital
    .sync({force: false})
    .then(() => tables.Hospital.create(hospital).then((hospital) => {
      cb(hospital);
    }))
}

const getAll = (cb) => {
  tables.Hospital
    .sync({force: false})
    .then(() => tables.Hospital.findAll().then((hospitals) => {
      cb(hospitals);
    }))
}

const getOne = (hospitalId, cb) => {
  tables.Hospital
    .sync({force: false})
    .then(() => tables.Hospital.findAll({
      where: {
        id: hospitalId 
      }
    }).then((hospital) => {
      cb(hospital[0]);
    }))
}

const setHospitalPatients = (hospitalId, patientsList, cb) => {
  tables.Hospital
    .sync({force: false})
    .then(() => tables.Hospital.update({ patientsList: patientsList }, { fields: ['patientsList'], where: { id: hospitalId } })
    .then((hospital) => {
      cb(hospital)
    }))
}

module.exports = {
  Hospital,
  insert,
  getAll,
  getOne,
  setHospitalPatients
};