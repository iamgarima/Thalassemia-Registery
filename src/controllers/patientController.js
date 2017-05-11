import passport from 'passport';
import passportJWT from 'passport-jwt';
import config from '../../config/config.json';
import { Patient, insert, getAll } from '../models/Patient';
import { checkUser } from '../models/User';
import { getOne, setHospitalPatients } from '../models/Hospital';

const jwtOptions = {}
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = config.secretOrKey;

exports.addPatient = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (val, user, jwt_payload) => {
    if(user) {
    	let patientDetails = new Patient(req.body);
      patientDetails.userEmailId = user.emailId;
    	insert(patientDetails, (patient) => {
    		if (patient) {
          getOne(user.hospital, (hospital) => {
            if(hospital) {
              if (!hospital.patientsList) {
                hospital.patientsList = [patient.id];
              } else {
                hospital.patientsList = [...hospital.patientsList, patient.id];
              }  
              setHospitalPatients(user.hospital, hospital.patientsList, (hospital) => {
                if(hospital[0] !== 0) {
                  res.send(patient)
                } else {
                  res.send('Couldn\'t update in hospital');
                }
              })
            } else {
              res.send('Hospital not found');
            }
          })
        }  
    		else res.status(500).send('ERROR')	
    	})
    } else {
      res.send('Something went wrong :(');
    }
  })(req, res, next);  
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