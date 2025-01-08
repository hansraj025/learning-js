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

