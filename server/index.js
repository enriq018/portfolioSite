
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());

app.listen(3000, () => console.log('server is running 3000'));


