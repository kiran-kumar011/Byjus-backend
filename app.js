const express = require('express');
const productsRoute = require('./api/routes/products');

const app = express();

app.use(cors());
app.use('/products', productsRoute);

module.exports = app;
