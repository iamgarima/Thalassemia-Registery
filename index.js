const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'/public/index.html'));
});

require('./dist/db/database').initDatabaseWithName('thalassemia_registery', () => {
	app.listen(process.env.PORT || 8000, () => {
	  console.log('Server listening at port 8000!');
	});
});

