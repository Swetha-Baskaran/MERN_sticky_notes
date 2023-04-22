//import mongoose to create mongoose model
const mongoose = require('mongoose');

//create Schema
const TodoItemSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  due: {
    type: String,
    required: true
  },
  position: {
    type: Number,
    required: true
  },
})

//export this Schema
module.exports = mongoose.model('task', TodoItemSchema);