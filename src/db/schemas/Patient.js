import Sequelize from 'sequelize';

export default (sequelize) => {
	const Patient = sequelize.define('patient', {
    userEmailId: {
      type: Sequelize.STRING
    },
  	fullName: {
  		type: Sequelize.STRING
  	},
  	dob: {
  		type: Sequelize.STRING
  	},
  	bloodType: {
  		type: Sequelize.STRING
  	}
	});
	Patient.sync({force: false});
	return Patient;
};