const randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#gussField')
const guessSlot = document.querySelector('.guesses')
const Remaining  = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')
let prevGuess = [];
let numGuess = 1;


let playGame = true;

if(playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault()
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess)
    });
}

function validateGuess(guess) {
    //
}

function checkGuess(guess){
    //
}

function displayGuess(guess){
    //
}

function displayMessage(message){
    //
}

function newGame(){
    //
}

function endGame(){
    //
}
