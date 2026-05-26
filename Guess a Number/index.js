let randomNumber = Math.floor(Math.random() * 100) + 1;

const submity = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guesseslot = document.querySelector('#guesses');
const remaining = document.querySelector('#remaining');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuesses = [];
let numOfGuesses = 1;
let playGame = true;

remaining.innerHTML = 10;

if (playGame) {
  submity.addEventListener('click', function (e) {
    e.preventDefault();

    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuesses.push(guess);

    if (numOfGuesses === 10) {
      displayGuesses(guess);
      displayMessage(`Game Over! The number was ${randomNumber}`);
      endGame();
    } else {
      displayGuesses(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Congratulations! You guessed the number!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Too low! Try again!');
  } else {
    displayMessage('Too high! Try again!');
  }
}

function displayGuesses(guess) {
  userInput.value = '';
  guesseslot.innerHTML += `${guess} `;
  numOfGuesses++;
  remaining.innerHTML = `${11 - numOfGuesses}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  submity.setAttribute('disabled', '');

  p.innerHTML = `<button id="newGame">Start New Game</button>`;
  startOver.appendChild(p);

  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', newGame);
}

function newGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;

  prevGuesses = [];
  numOfGuesses = 1;

  guesseslot.innerHTML = '';
  remaining.innerHTML = 10;
  lowOrHigh.innerHTML = '';

  userInput.removeAttribute('disabled');
  submity.removeAttribute('disabled');

  startOver.removeChild(p);
}