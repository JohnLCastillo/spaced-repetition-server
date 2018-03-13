'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const {Question} = require('./models');

const router = express.Router();

const jsonParser = bodyParser.json();

router.get('/',jsonParser,(req,res) => {
    Question
    .find({})
    .then(data => res.json(data))
    .catch(err => console.log(err))
});
//shift

//router.post(answer)
module.exports = {router};