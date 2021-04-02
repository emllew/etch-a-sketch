const container = document.querySelector('.container');
const button = document.querySelector('button');

let rows = (button.onclick = prompt('How big will this grid be?'));
let columns = rows;
function makeGrid(rows, cols) {
  container.setAttribute('style', `--grid-rows: ${rows}`);
  container.setAttribute('style', `--grid-cols: ${cols}`);
  for (let i = 0; i < rows * cols; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
    box.innerText = i + 1;
    box.addEventListener('mouseover', changecolor);

    function changecolor() {
      box.classList.add('active');
    }
  }
}

makeGrid(rows, columns);
