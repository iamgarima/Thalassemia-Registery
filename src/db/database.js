import Sequelize from 'sequelize';
import { createDatabaseWithName } from './create_database';
import Patient from './schemas/Patient';
import User from './schemas/User';

export const tables = {};
export const initDatabaseWithName = (name, cb = () => {}) => {
	createDatabaseWithName(name, (err) => {
		if (!err) {
			const sequelize = new Sequelize(`postgres://postgres:qwerty@localhost:5432/${name}`);
			sequelize
			  .authenticate()
			  .then(() => {
			  	console.log('Connection has been established successfully.');
				  tables.Patient = Patient(sequelize);
				  tables.User = User(sequelize);
			  	cb();
			  })
			  .catch(err => {
			  	console.log('Unable to connect to the database:', err);
			  	cb();
			  });
		} else {
			console.log('Unable to create database');
			cb();
		}
	})
}
