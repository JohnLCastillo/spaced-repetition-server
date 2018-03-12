'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const {Question} = require('./models');

const router = express.Router();

const jsonParser = bodyParser.json();

router.get('/:userid/favorites', jsonParser, (req,res) => {
    Question
  .then(() => console.log('It worked!'))
  .catch(err => res.status(500).json({message: 'Internal server error'}));
});

module.exports = {router};