'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const {Question} = require('./models');

const router = express.Router();

const jsonParser = bodyParser.json();

router.get('/',jsonParser,(req,res) => {
    Question
    .find({})
    .then(data => console.log(data))
    .catch(err => console.log(err))
});

router.get('/:userid',jsonParser,(req,res) => {
    // let head = array.shift();
    // res.json(head);
})
//shift

//router.post(answer)
module.exports = {router};