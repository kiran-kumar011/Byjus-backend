const mongoose = require('mongoose');

// const arr = Status.find({});
// console.log(arr, 'status');

const boardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date },
  completionStatus: { type: String, default: '0%' },
  status: {
    type: String,
    enum: ['on track', 'delayed', 'on hold'],
    lowercase: true,
    required: true,
  },
  owners: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
