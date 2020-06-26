const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date },
  completionStatus: { type: String, default: 0 },
  status: { type: String, enum: ['on track', 'delayed', 'on hold'] },
});

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
