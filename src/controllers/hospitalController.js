import jwt from 'jsonwebtoken';
import passportJWT from 'passport-jwt';
import config from '../../config/config.json';
import { Hospital, insert, getAll } from '../models/Hospital';
import { setHospital } from '../models/User';

const ExtractJwt = passportJWT.ExtractJwt;
const jwtOptions = {};

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = config.secretOrKey;


exports.addHospital = (req, res) => {
  const hospitalDetails = new Hospital(req.body);
  insert(hospitalDetails, (hospital) => {
    if(hospital) {
      setHospital(req.body.emailId, hospital.id, () => {
        const payload = {emailId: req.body.emailId};
        const token = jwt.sign(payload, jwtOptions.secretOrKey);
        const userHospital = {
          userToken: token,
          hospital: hospital
        };
        res.send(userHospital);
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