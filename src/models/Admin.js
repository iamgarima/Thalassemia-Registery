import { tables } from '../db/database';

function Admin(adminId) {
  this.adminId = adminId;
  this.usersList = null;
}

const insertAdmin = (admin, cb) => {
  tables.Admin
    .sync({force: false})
    .then(() => tables.Admin.create(admin).then(() => {
      cb();
    }))
}

module.exports = {
  Admin,
  insertAdmin
};