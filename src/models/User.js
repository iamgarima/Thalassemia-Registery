import { tables } from '../db/database';

function User(userDetails) {
  this.emailId = userDetails.emailId;
  this.hospital = userDetails.hospital;
  this.isAdmin = userDetails.isAdmin;
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

const setPassword = (user, cb) => {
  tables.User
    .sync({force: false})
    .then(() => tables.User.update({ password: user.password }, { fields: ['password'], where: { emailId: user.emailId } })
    .then((users) => {
      cb(users)
    }))
}

const setHospital = (adminEmailId, hospitalId, cb) => {
  tables.User
    .sync({force: false})
    .then(() => tables.User.update({ hospital: hospitalId }, { fields: ['hospital'], where: { emailId: adminEmailId } })
    .then((users) => {
      cb()
    }))
}       

module.exports = {
  User,
  insert,
  getAll,
  checkUser,
  setPassword,
  setHospital
}