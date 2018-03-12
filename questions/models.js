'use strict';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const questionSchema = mongoose.Schema({
  prevQuestions: {type: Array},
  currentQuestion: {type: String},
  score: {type: Number}
});

questionSchema.methods.serialize = function() {
  return {
    prevQuestions: this.prevQuestions,
    score: this.score,
    currentQuestion: this.currentQuestion
  };
};

const Question = mongoose.model('question', questionSchema);

module.exports = {Question};