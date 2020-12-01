const columns = 4;
let cells;

function drawField(rows) {
  const container = document.getElementById('game-container');
  for (let i = 0; i < rows * rows; i += 1) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    container.appendChild(cell);
  }
  container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  cells = Array.from(document.getElementsByClassName('cell'));
  cells[0].classList.add('cell-with-goblin');
}

function placeGoblin() {
  cells = Array.from(document.getElementsByClassName('cell'));
  const activeCell = document.getElementsByClassName('cell-with-goblin')[0];
  if (activeCell) {
    const newActiveCellIndex = Math.floor(Math.random() * Math.floor(columns * columns));
    activeCell.classList.remove('cell-with-goblin');
    cells[newActiveCellIndex].classList.add('cell-with-goblin');
  }
}

drawField(columns);
setInterval(placeGoblin, 1000);
