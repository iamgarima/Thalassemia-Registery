import Sequelize from 'sequelize';

export default (sequelize) => {
  const Hospital = sequelize.define('hospital', {
    name: {
      type: Sequelize.STRING
    },
    location: {
      type: Sequelize.STRING
    },
    patientsList: {
      type: Sequelize.ARRAY(Sequelize.INTEGER)
    }
  });
  Hospital.sync({force: false});
  return Hospital;
};