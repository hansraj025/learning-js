# Projects related to DOM
## Set1 link : [Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


### Project 1 - Color Scheme Switcher Solution Code
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

