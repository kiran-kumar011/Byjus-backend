const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const boardsRoutes = require('./api/routes/boards');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/boards', boardsRoutes);

module.exports = app;
