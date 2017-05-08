import { User, setPassword } from '../models/User';

exports.setPassword = (req, res) => {
  const userDetails = new User(req.body);
  setPassword(userDetails, (users) => {
    if(users[0] === 0) {
      res.send('Contact admin to make you an authorised user');
    } else {
      res.send(users);
    }
  })
}