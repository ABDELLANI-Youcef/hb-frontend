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
const movePlayer = () => {

};

export { initBoard, movePlayer };
