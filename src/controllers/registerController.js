import { User, insert, checkUser } from '../models/User';

exports.addAdmin = (req, res) => {
  const userDetails = new User(req.body);
  checkUser(userDetails, (user) => {
    if(user) {
      res.send('You are already registered.');
    } else {
      userDetails.isAdmin = true;
      insert(userDetails, (user) => {
        if(user) {
          res.send(user);
        } else {
          res.status(500).send('ERROR');
        }
      })
    }
  })
}