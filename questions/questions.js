const {Question} = require('./models.js');
const mongoose = require('mongoose');


const allQuestions = [
    {
        word: 'Luz',
        translation: 'light'
    },
    {
        word: 'Hola',
        translation: 'hello'
    },
    {
        word: 'Vaso',
        translation: 'cup'
    },
    {
        word: 'Amigo',
        translation: 'friend'
    },
    {
        word: 'Perro',
        translation: 'dog'
    },
    {
        word: 'Pero',
        translation: 'but'
    },
    {
        word: 'Boda',
        translation: 'wedding'
    },
    {
        word: 'Regalo',
        translation: 'gift'
    },
    {
        word: 'Correr',
        translation: 'run'
    },
    {
        word: 'Diccionario',
        translation: 'dictionary'
    },
    {
        word: 'Estadio',
        translation: 'stadium'
    }
]

function pushQuestions(arr){
    arr.map(obj => {
        // console.log(obj.word)
        Question
        .create({
            question: obj.word,
            answer: obj.translation
        })
    })
    return
};

pushQuestions(allQuestions);