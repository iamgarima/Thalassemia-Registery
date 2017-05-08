import { Hospital, insert, getAll } from '../models/Hospital'

exports.addHospital = (req, res) => {
  const hospitalDetails = new Hospital(req.body);
  insert(hospitalDetails, (hospital) => {
    if(hospital) res.send(hospital)
    else res.status(500).send('ERROR')  
  })
}

exports.getHospitals = (req, res) => {
  getAll((hospitals) => {
    if(hospitals) res.send(hospitals)
    else res.status(500).send('ERROR')  
  })
}