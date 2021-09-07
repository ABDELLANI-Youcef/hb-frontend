const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const initBoard = (lines, columns) => {
  const board = [];
  for (let i = 0; i < lines; i += 1) {
    const a = [];
    for (let j = 0; j < columns; j += 1) {
      a.push('');
    }
    board.push(a);
  }

  let numMash = Math.floor(Math.sqrt(lines * columns));
  const px = Math.floor(lines / 2);
  const py = Math.floor(columns / 2);
  board[px][py] = 'P';
  while (numMash > 0) {
    const i = getRndInteger(0, lines);
    const j = getRndInteger(0, columns);
    if (board[i][j] === '') {
      board[i][j] = 'm';
      numMash -= 1;
    }
  }
  return board;
};
// board, px, py, direction, number
const movePlayer = (board, px, py, direction) => {
  const board2 = board.map((arr) => arr.slice());
  let qx = px;
  let qy = py;
  switch (direction) {
    case 'left':
      qy -= 1;
      break;
    case 'right':
      qy += 1;
      break;
    case 'up':
      qx -= 1;
      break;
    case 'down':
      qx += 1;
      break;
    default:
      break;
  }
  board2[px][py] = '';
  // if the board2[qx][qy] === 'm' increment score
  board2[qx][qy] = 'P';
  return board2;
};

export { initBoard, movePlayer };
