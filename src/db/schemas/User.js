import Sequelize from 'sequelize';

export default (sequelize) => {
  const User = sequelize.define('user', {
    emailId: {
      type: Sequelize.STRING
    },
    hospital: {
      type: Sequelize.STRING
    },
    isAdmin: {
      type: Sequelize.BOOLEAN
    },
    password: {
      type: Sequelize.STRING
    }
  });
  User.sync({force: false});
  return User;
};