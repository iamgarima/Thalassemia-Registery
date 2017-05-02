import pg from 'pg';

export const createDatabaseWithName = (name, cb) => {
	const conString = {
		user: 'postgres',
		database: name,
		password: 'qwerty',
		host: 'localhost',
		port: '5432',
		max: 10,
		idleTimeoutMillis: 30000
	};
	const pool = new pg.Pool(conString);
	pool.connect((err, client, done) => {
		if (err) {
			if (err.code === '3D000') {
			  console.log('Database does not exist, creating custom db');
				const client = new pg.Client('pg://postgres:qwerty@localhost:5432/postgres');
				client.connect((err, client) => {
					if (err) {
						cb(err);
					}
					console.log('Connected to database:', client.database);
					client.query(`CREATE DATABASE ${name}`, err => {
						if (err) {
							console.log(err)
							cb(err);
						}
						else {
							console.log('Database created');
							cb();
						}
						client.end();
					});
				});
			} else {
				console.log(err);
				cb(err);
			}
		} else {
			console.log('Database already exists');
			cb();
		}
		done();
	})
}
