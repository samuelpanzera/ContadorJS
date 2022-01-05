var currentNumberSpan = document.getElementById('currentNumber');
var currentNumber = 0;


function increment() {
  currentNumber += 1;
  currentNumberSpan.innerHTML = currentNumber;
  document.title = currentNumber;

}

function decrement() {
  currentNumber -= 1;
  currentNumberSpan.innerHTML = currentNumber;
  document.title = currentNumber;
}

