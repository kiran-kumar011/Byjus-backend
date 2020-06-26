const express = require('express');
const Board = require('../../models/Boards');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('products route invoked');

  Board.find({}, (err, boards) => {
    res.status(200).json({ message: 'Boards from db', boards });
  });
});

router.post('/', (req, res, next) => {
  const board = new Board({
    title: 'CBSE Grade 5 Maths - Algebra',
    date: new Date(),
    completionStatus: '10%',
    status: 'on hold',
  });

  board.save((err, board) => {
    if (err) res.status(404).json({ error: err });
    if (board) {
      Board.find({}, (err, boards) => {
        res.status(200).json({ message: 'Boards from db', boards });
      });
    }
  });
});

module.exports = router;
