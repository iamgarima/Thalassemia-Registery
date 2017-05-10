import jwt from 'jsonwebtoken';
import passportJWT from 'passport-jwt';
import config from '../../config/config.json';
import { User, setPassword } from '../models/User';

const ExtractJwt = passportJWT.ExtractJwt;
const jwtOptions = {};

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = config.secretOrKey;

exports.setPassword = (req, res) => {
  const userDetails = new User(req.body);
  setPassword(userDetails, (users) => {
    if(users[0] === 0) {
      res.send('Contact admin to make you an authorised user');
    } else {
      const payload = {emailId: userDetails.emailId};
      const token = jwt.sign(payload, jwtOptions.secretOrKey);
      res.send(token);
    }
  })
}