const mainTitle = document.querySelector('#title');
let curValue = 1;

const btnDecrement = document.querySelector('#decrement');
const btnReset = document.querySelector('#reset');
const btnIncrement = document.querySelector('#increment');

btnIncrement.addEventListener('click', () => {
  curValue++;
  if (curValue == 11){
    curValue = 0;
  }
  mainTitle.textContent = "Points: " + String(curValue);
});

btnDecrement.addEventListener('click', () => {
  curValue--;
  if (curValue == -1){
    curValue = 0;
  }
  mainTitle.textContent = "Points: " + String(curValue);
});

btnReset.addEventListener('click', () => {
  window.location.href = './index.html'
});
