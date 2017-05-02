import Sequelize from 'sequelize';

export default (sequelize) => {
	const Patient = sequelize.define('patient', {
  	fullName: {
  		type: Sequelize.STRING
  	},
  	dob: {
  		type: Sequelize.STRING
  	},
  	diseaseType: {
  		type: Sequelize.STRING
  	}
	});
	Patient.sync({force: false});
	return Patient;
};