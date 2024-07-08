let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining  = document.querySelector('.lastResult')
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
        console.log(guess); //for checking number
        validateGuess(guess)
    });
}

function validateGuess(guess) {
    //
    if (isNaN(guess)){
        alert("please enter a valid number");
    }else if (guess < 1){
        alert("please enter a number more than 1");
    }else if (guess > 100){
        alert("please enter a number less than 100");
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`game over. Random number was ${randomNumber} `)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    //

    if(guess === randomNumber){
        displayMessage(`you gussed it right`)
    }else if(guess < randomNumber){
        displayMessage(`number is TOO low `)
    }else{
        displayGuess(guess)
        checkGuess(guess)
    }
}

function displayGuess(guess){
    //
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`

}

function displayMessage(message){
    //
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    //
}

function endGame(){
    //
}
