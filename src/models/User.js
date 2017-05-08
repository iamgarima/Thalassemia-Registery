import { tables } from '../db/database';

function User(userDetails) {
  this.emailId = userDetails.emailId;
  this.password = userDetails.password;
}

const insert = (user, cb) => {
  tables.User
    .sync({force: false})
    .then(() => tables.User.create(user).then((user) => {
      cb(user);
    }))
}

const getAll = (cb) => {
  tables.User
    .sync({force: false})
    .then(() => tables.User.findAll().then((users) => {
      cb(users);
    }))
}

const checkUser = (user, cb) => {
  tables.User
    .sync({force: false})
    .then(() => tables.User.findAll({
      where: {
        emailId: user.emailId 
      }
    }).then((users) => {
      if(users[0]) cb(users[0].dataValues)
      else cb(users[0])
    }))
} 

module.exports = {
  User,
  insert,
  getAll,
  checkUser
}