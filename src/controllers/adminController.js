import passport from 'passport';
import passportJWT from 'passport-jwt';
import config from '../../config/config.json';
import { User, insert, getAll, checkUser } from '../models/User';

const jwtOptions = {}
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = config.secretOrKey;

exports.addUser = (req, res, next) => {
  passport.authenticate('jwt', { session: false, failureFlash: 'Unauthorised access' }, (val, user, jwt_payload) => {
    if(user) {
      if(user.isAdmin === true) {
        const userDetails = new User(req.body);
        insert(userDetails, (user) => {
          if(user) res.send(user)
          else res.status(500).send('ERROR')  
        })
      }
    } else {
      res.send('Unauthorised access');
    }
  })(req, res, next);
}

exports.getUsers = (req, res, next) => {
  passport.authenticate('jwt', { session: false, failureFlash: 'Unauthorised access' }, (val, user, jwt_payload) => {
    if(user) {
      if(user.isAdmin === true) {
        getAll((users) => {
          if(users) res.send(users)
          else res.status(500).send('ERROR')
        })
      }
    } else {
      res.send('Unauthorised access');
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