import { User, insert, getAll } from '../models/User';

exports.addUser = (req, res) => {
  const userDetails = new User(req.body);
  insert(userDetails, (user) => {
    if(user) res.send(user)
    else res.status(500).send('ERROR')  
  })
}

exports.getUsers = (req, res) => {
  getAll((users) => {
    if(users) res.send(users)
    else res.status(500).send('ERROR')
  })
}