import { Hospital, insert, getAll } from '../models/Hospital';
import { setHospital } from '../models/User';

exports.addHospital = (req, res) => {
  const hospitalDetails = new Hospital(req.body);
  insert(hospitalDetails, (hospital) => {
    if(hospital) {
      setHospital(req.body.emailId, hospital.id, () => {
        res.send(hospital)
      })
    } else res.status(500).send('ERROR')  
  })
}

exports.getHospitals = (req, res) => {
  getAll((hospitals) => {
    if(hospitals) res.send(hospitals)
    else res.status(500).send('ERROR')  
  })
}