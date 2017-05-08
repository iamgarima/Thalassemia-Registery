import { tables } from '../db/database';

function Hospital(hospitalDetails) {
  this.name = hospitalDetails.name;
  this.location = hospitalDetails.location;
  this.hospitalsList = hospitalDetails.hospitalsList;
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

module.exports = {
  Hospital,
  insert,
  getAll
};