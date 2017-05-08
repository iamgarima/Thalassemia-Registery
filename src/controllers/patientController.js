import passport from 'passport';
import passportJWT from 'passport-jwt';
import config from '../../config/config.json';
import { Patient, insert, getAll } from '../models/Patient';
import { checkUser } from '../models/User';

const jwtOptions = {}
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = config.secretOrKey;

exports.addPatient = (req, res) => {
	let patientDetails = new Patient(req.body);
	insert(patientDetails, (patient) => {
		if (patient) res.send(patient)
		else res.status(500).send('ERROR')	
	})
}

exports.getPatients = (req, res, next) => {
	passport.authenticate('jwt', { session: false, failureRedirect: '/login' }, (val, user, jwt_payload) => {
    if(user) {
      getAll(user.emailId, (patients) => {
        if (patients) res.send(patients)
        else res.status(500).send('ERROR')
      })
    } else {
      res.redirect('/login');
    }
	})(req, res, next);
}

const strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log('payload received', jwt_payload);
  checkUser(jwt_payload, (user) => {
    if (user) {
      next(null, user, jwt_payload);
    } else {
      next(null, false);
    }
  })
});

passport.use(strategy);