const container = document.querySelector('.container');
const restartButton = document.querySelector('.restartButton');
const startButton = document.querySelector('.startButton');
restartButton.style.visibility = 'hidden';
function promptQ() {
  let rows = Number(
    window.prompt('How big will your grid be? (a number between 1 and 100)')
  );
  let cols = rows;

  if (rows < 1) {
    alert('Please try again with a number bigger than 1 but below 100!');
  } else if (rows > 100) {
    alert('Please try again with a number below 100 and bigger than 1!');
  } else {
    makeGrid(rows, cols);
    restartButton.style.visibility = 'visible';
    startButton.style.visibility = 'hidden';
  }
}

function makeGrid(rows, cols) {
  container.setAttribute('style', `--grid-rows:${rows}; --grid-cols: ${cols}`);

  for (let i = 0; i < rows * cols; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);

    box.addEventListener('mouseover', changecolor);

    function changecolor() {
      box.classList.add('active');
    }
  }
}

function restart() {
  document.location.reload();
}
