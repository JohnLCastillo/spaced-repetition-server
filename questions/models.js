'use strict';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const questionSchema = mongoose.Schema({
    question: {type: String, required: true},
    answer: {type: String, required: true}
});


questionSchema.methods.serialize = function() {
  return {
   question: this.question,
   answer: this.answer
  };
};

const Question = mongoose.model('questions', questionSchema);

module.exports = {Question};