const express = require('express');
const { route } = require('../../app');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('products route invoked');
  res.status(200).json({ message: 'Products route' });
});

router.post('/', (req, res, next) => {
  res.status(200).json({ message: 'Products Post route' });
});

module.exports = router;
