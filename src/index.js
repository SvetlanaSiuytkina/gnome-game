const board = document.querySelector('.game-board');
const rows = 4;
const columns = 4;

for (let r = 0; r < rows; r++) {
  for (let c = 0; c < columns; c++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    board.appendChild(cell);
  }
}

const cells = board.querySelectorAll('.cell');

function randomIndex(max) {
  return Math.floor(Math.random() * max);
}

const gnome = document.createElement('img');
gnome.src = './image/goblin.png';
gnome.className = 'gnome';

let currentIndex = randomIndex(cells.length);
cells[currentIndex].appendChild(gnome);

setInterval(() => {
  const nextIndex = randomIndex(cells.length);

  if (nextIndex === currentIndex) {
    return;
  }

  cells[nextIndex].appendChild(gnome);
  currentIndex = nextIndex;
}, 1000);
