// const {Question} = require('./models.js');
// const mongoose = require('mongoose');


const allQuestions = [
    {
        "question": "Luz",
        "answer": "light"
    },
    {
        "question": "Hola",
        "answer": "hello"
    },
    {
        "question": "Vaso",
        "answer": "cup"
    },
    {
        "question": "Amigo",
        "answer": "friend"
    },
    {
        "question": "Perro",
        "answer": "dog"
    },
    {
        "question": "Pero",
        "answer": "but"
    },
    {
        "question": "Boda",
        "answer": "wedding"
    },
    {
        "question": "Regalo",
        "answer": "gift"
    },
    {
        "question": "Correr",
        "answer": "run"
    },
    {
        "question": "Diccionario",
        "answer": "dictionary"
    },
    {
        "question": "Estadio",
        "answer": "stadium"
    }
]

// function pushQuestions(arr){
//     Question
//     .create(arr)
//     .then(data => console.log('this is the data',data))
//     .catch(err => console.log(err))
// };

// pushQuestions(allQuestions);

module.exports = {allQuestions};