const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const WorkshopSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  sessions: {
    type: String,
    required: true
  },
  instructor: {
    type: String,
    required: true
  },
  gmail: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,  // Path to the image
    default: ''
  }
}, {
  timestamps: true
});

module.exports = mongoose.model(
  'Workshop', //file name
  WorkshopSchema //function name
)