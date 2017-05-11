import { tables } from '../db/database';

function Admin(adminId) {
  this.adminId = adminId;
  this.usersList = undefined;
}

const insertAdmin = (admin, cb) => {
  tables.Admin
    .sync({force: false})
    .then(() => tables.Admin.create(admin).then(() => {
      cb();
    }))
}

const getOne = (adminId, cb) => {
  tables.Admin
    .sync({force: false})
    .then(() => tables.Admin.findAll({
      where: {
        adminId: adminId 
      }
    }).then((admin) => {
      cb(admin[0].dataValues);
    }))
}

const setAdminUsers = (adminId, usersList, cb) => {
  tables.Admin
    .sync({force: false})
    .then(() => tables.Admin.update({ usersList: usersList }, { fields: ['usersList'], where: { adminId: adminId } })
    .then((admin) => {
      cb(admin)
    }))
}

module.exports = {
  Admin,
  insertAdmin,
  getOne,
  setAdminUsers
};