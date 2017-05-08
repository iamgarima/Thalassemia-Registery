import jwt from 'jsonwebtoken';
import passportJWT from 'passport-jwt';
import config from '../../config/config.json';
import { User, checkUser } from '../models/User';
import { getAll } from '../models/Patient';

const ExtractJwt = passportJWT.ExtractJwt;
const jwtOptions = {};

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = config.secretOrKey;

exports.validUserCheck = (req, res) => {
  let user = new User(req.body);
  checkUser(user, (user) => {
    if(user) {
      if(user.password === req.body.password) {
        const payload = {emailId: user.emailId};
        const token = jwt.sign(payload, jwtOptions.secretOrKey);
        getAll(user.emailId, (patients) => {
          if (patients) {
            const userPatients = {
              userToken: token,
              isAdmin: user.isAdmin,
              patients: patients
            };
            res.send(userPatients);
          }
          else res.status(500).send('ERROR')
        })
      } else {
        res.status(401).json({message: "Wrong Password"});
      }
    } else {
      res.status(401).json({message: "Input did not match"});
    }
  })
}  