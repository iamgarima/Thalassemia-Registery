import passport from 'passport';
import passportJWT from 'passport-jwt';
import config from '../../config/config.json';
import { User, insert, getAll, getOneUser, checkUser } from '../models/User';
import { getOne, setAdminUsers } from '../models/Admin';

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
        userDetails.hospital = user.hospital;
        insert(userDetails, (newUser) => {
          if(newUser) {
            getOne(user.id, (admin) => {
              if(admin) {
                if(!admin.usersList) {
                  admin.usersList = [newUser.id];
                } else {
                  admin.usersList = [...admin.usersList, newUser.id];
                }           
                setAdminUsers(user.id, admin.usersList, (admin) => {
                  if(admin[0] !== 0) {
                    res.send(newUser)
                  } else {
                    res.send('Couldn\'t update in admin');
                  }
                })
              } else res.send('Admin not found');  
            })
          } else {
            res.status(500).send('ERROR')
          }
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
        var myuser;
        getOne(user.id, (admin) => {
          if(admin) {
            let usersList = [];
            let adminUsersListLength = admin.usersList.length;
            while(admin.usersList.length !== 0) {
              getOneUser(admin.usersList.shift(), (user) => {
                if(user) {
                  usersList.push(user);
                  if(usersList.length === (adminUsersListLength - admin.usersList.length)) {
                    res.send(usersList);
                  }                
                } else {
                  res.send('Couldn\'t fetch users')
                }
              })    
            }
          } else {
            res.status(500).send('ERROR');
          }
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