const express = require('express');
const cors = require('cors');
const boardsRoutes = require('./api/routes/boards');

const app = express();

app.use(cors());
app.use('/boards', boardsRoutes);

module.exports = app;
