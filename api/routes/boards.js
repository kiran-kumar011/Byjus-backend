const express = require('express');
const Board = require('../../models/Board');
const router = express.Router();

router.get('/', (req, res) => {
  const status = ['on track', 'delayed', 'on hold'];
  Board.find({}, (err, boards) => {
    if (err) res.status(404).json({ error: err });
    res.status(200).json({ message: 'Boards from db', boards, status });
  });
});

router.post('/', (req, res, next) => {
  const body = req.body;
  const board = new Board({
    title: body.title,
    completionStatus: body.completionStatus,
    date: new Date(),
    status: body.status,
  });

  board.save((err, board) => {
    if (err) res.status(404).json({ error: err });
    if (board) {
      Board.find({}, (err, boards) => {
        if (err) res.status(404).json({ error: err });
        res.status(200).json({ message: 'Added Succesfully', boards });
      });
    }
  });
});

router.post('/update', (req, res, next) => {
  const { id } = req.body;
  Board.findByIdAndUpdate({ _id: id }, { ...req.body }, (error, board) => {
    if (error) res.status(404).json(error);
    res.status(200).json({ message: 'Updated succesfully', board });
  });
});

module.exports = router;
