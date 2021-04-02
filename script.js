const container = document.querySelector('.container');
const button = document.querySelector('button');
function makeGrid(rows, cols) {
  container.setAttribute('style', `--grid-rows: ${rows}`);
  container.setAttribute('style', `--grid-cols: ${cols}`);
  for (let i = 0; i < rows * cols; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
    box.innerText = '.';
    box.addEventListener('mouseover', changecolor);

    function changecolor() {
      box.classList.add('active');
    }
  }
}

makeGrid(15, 15);
