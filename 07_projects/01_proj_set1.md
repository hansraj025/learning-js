# Projects related to DOM
## Set1 link : [Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


### [Project 1 - Color Scheme Switcher Solution Code](https://stackblitz.com/edit/dom-project-chaiaurcode-yluqtnxh?file=1-colorChanger%2Fchaiaurcode.js)
```JavaScript
const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (event) {
    // console.log(event);
    // console.log(event.target);
    switch (event.target.id) {
      case 'grey':
        body.style.backgroundColor = event.target.id;
        break;
      case 'white':
        body.style.backgroundColor = event.target.id;
        console.log('white');
        break;
      case 'blue':
        body.style.backgroundColor = event.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = event.target.id;
        break;
      case 'purple':
        body.style.backgroundColor = event.target.id;
    }
  });
});
```

### [Project 2 - BMI Calculator Solution Code](https://stackblitz.com/edit/dom-project-chaiaurcode-yluqtnxh?file=2-BMICalculator%2Fchaiaurcode.js)
```JavaScript
const form = document.querySelector('form');
// this use case will give empty value
// const height = parseInt(form.querySelector('#height').value);
// const weight = parseInt(form.querySelector('#weight').value);

form.addEventListener('submit', function (event) {
  event.preventDefault();
  // parseInt(''), parseInt('abc12') => NaN
  // parseInt('4'), parseInt('4.5'), parseInt('4b') => 4
  const height = parseInt(form.querySelector('#height').value);
  const weight = parseInt(form.querySelector('#weight').value);
  const resultsDiv = form.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    // false => value valid
    resultsDiv.innerText = 'Enter valid height.';
  } else if (isNaN(weight) || weight <= 0) {
    // false => value valid
    resultsDiv.innerText = 'Enter valid weight. ';
  } else {
    // runs if both values are valid
    const bmi = (weight / height ** 2).toFixed(2);
    resultsDiv.innerHTML = `
  <span>BMI: ${bmi}<span><br>
  <span>Result: ${
    bmi < 18.6 ? 'Under Weight' : bmi <= 24.9 ? 'Normal Weight' : 'Over Weight'
  }`;
  }
});
```

### [Project 3 - Digital Clock (IST) Solution Code](https://stackblitz.com/edit/dom-project-chaiaurcode-yluqtnxh?file=3-DigitalClock%2Fchaiaurcode.js)
```JavaScript
const clock = document.querySelector('#clock');

// Method 1
function refresh() {
  const date = new Date();
  clock.innerText = date.toLocaleTimeString(/*'IN'*/);
  setTimeout(refresh, 1000); // recursive call to refresh
}
refresh();

// Method 2
// setInterval(function () {
  // const date = new Date();
  // clock.innerText = date.toLocaleTimeString(/*'IN'*/);
// }, 1000);

```

### [Project 4 - Higher Lower Game Solution Code](https://stackblitz.com/edit/dom-project-chaiaurcode-yluqtnxh?file=3-DigitalClock%2Fchaiaurcode.js)
```JavaScript
const form = document.querySelector('.form');
const guessInput = form.querySelector('.guessField');
const submit = form.querySelector('.guessSubmit');
const guesses = document.querySelector('.guesses');
const remainingGuesses = document.querySelector('.lastResult');
const startOver = document.querySelector('.message');
const lowOrHiOrError = document.querySelector('.lowOrHi');

let allValidGuesses = [];
let target = Math.round(Math.random() * 100) + 1;
let remainingGuessCount = 10;
let playing = true;

console.log(target);
submit.addEventListener(
  'click',
  function (event) {
    // event.target is the form
    event.preventDefault(); // dont send a http get request (def behavior) [??]
    if (playing) {
      let guess = Number(guessInput.value);
      validateGuess(guess);
    }
  },
  false
);

// Checks if input is valid
function validateGuess(guess) {
  if (isNaN(guess) || !Number.isInteger(guess)) {
    // ('4a' => NaN, '' => 0)
    setMessage('Invalid input. Please, enter a valid value.');
  } else if (guess < 1) {
    setMessage('Please Enter a integer between 1 and 100.');
  } else if (guess > 100) {
    setMessage('Please Enter a integer between 1 and 100.');
  } else {
    updateGuesses(guess);
    checkGuess(guess);
  }
}

function setMessage(msg) {
  lowOrHiOrError.innerText = msg;
}

// displays the valid guess to the user
function updateGuesses(guess) {
  guessInput.value = '';

  allValidGuesses.push(guess);
  guesses.innerHTML += ` ${guess}`;

  remainingGuessCount--;
  remainingGuesses.innerHTML = `${remainingGuessCount}`;
}

// game logic
function checkGuess(guess) {
  if (remainingGuesses === 0) {
    setMessage(`You lose. The target was ${target}`);
    endGame();
  } else if (guess < target) {
    setMessage('guess larger.');
  } else if (guess > target) {
    setMessage('guess Smaller.');
  } else {
    setMessage('You won.');
    endGame();
  }
}

// Things to be performed when the game ends i.e user loses or user wins
function endGame() {
  playing = false;
  submit.setAttribute('disabled', '');
  startOver.innerHTML +=
    "<p class='restartButton' style='background-color: black; padding: 15px; border-radius: 5px;'>Start Over</p>";

  startOver
    .querySelector('.restartButton')
    .addEventListener('click', function (e) {
      console.log('Clicked');
      newGame();
    });
}

// Reset
function newGame() {
  playing = true;
  remainingGuessCount = 10;
  allValidGuesses = [];
  target = Math.round(Math.random() * 99) + 1;

  submit.removeAttribute('disabled');
  startOver.removeChild(startOver.querySelector('.restartButton'));
  guessInput.value = '';
  guesses.innerHTML = ' ';
  remainingGuesses.innerHTML = ` ${remainingGuessCount}`;
  setMessage('');
}

```