'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const {Question} = require('./models');
const main = require('./linkedlist');

const router = express.Router();

const jsonParser = bodyParser.json();

router.get('/',jsonParser,(req,res) => {
    Question
    .find({})
    .then(data => res.json(data))
    .catch(err => console.log(err))
});

router.get('/:userid',jsonParser,(req,res) => {
    Question
    .find({})
    .then(data => res.json(data.shift()))
    .catch(err => console.log(err))
    // let head = array.shift();
    // res.json(head);
})
//shift

//router.post(answer)
module.exports = {router};