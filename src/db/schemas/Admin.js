import Sequelize from 'sequelize';

export default (sequelize) => {
  const Admin = sequelize.define('admin', {
    adminId: {
      type: Sequelize.INTEGER
    },
    usersList: {
      type: Sequelize.ARRAY(Sequelize.INTEGER)
    }
  });
  Admin.sync({force: false});
  return Admin;
};