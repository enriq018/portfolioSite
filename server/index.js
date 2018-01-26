//express is the server
// require allows us to use node modules that we npm/bower/yarn/ect installed
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database-mysql/index.js');

app.use(express.static(__dirname + '/../react-client/dist'));
// bodyParser adds a "body" property to the request in JSON format
app.use(bodyParser.json());

app.listen(3000, () => console.log('server is running 3000'));


