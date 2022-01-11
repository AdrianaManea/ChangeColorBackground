const body = document.querySelector('body');
const button = document.querySelector('button');
const colors = ['red', 'blue', 'green', 'yellow', 'yellowgreen', 'orangered'];

body.style.background = '#fa5d42';
button.addEventListener('click', changeBackground);

function changeBackground() {
  const colorIndex = parseInt(Math.random() * colors.length + 1);
  body.style.backgroundColor = colors[colorIndex];
}