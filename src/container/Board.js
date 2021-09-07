import { useState, useEffect } from 'react';
import BoardTable from '../components/BoardTable';
import { initBoard } from '../logic/board';

function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };
  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);
  return keyPressed;
}
function Board() {
  const ArrowUp = useKeyPress('ArrowUp');
  const ArrowDown = useKeyPress('ArrowDown');
  const ArrowLeft = useKeyPress('ArrowLeft');
  const ArrowRight = useKeyPress('ArrowRight');

  const [lines, setLines] = useState(0);
  const [columns, setColumns] = useState(0);
  const [board, setBoard] = useState(null);
  const [design, setDesign] = useState(false);
  const [px, setPx] = useState(0);
  const [py, setPy] = useState(0);

  const boardSize = () => {
    alert('You should save the princess');
    const numL = prompt('Insert the number of lines:');
    setLines(parseInt(numL, 10));
    const numC = prompt('Insert the number of columns:');
    setColumns(parseInt(numC, 10));
    setBoard(initBoard(numL, numC));
    setDesign(true);
  };
  useEffect(() => {
    boardSize();
  }, []);
  // (<p>This board has {lines} lines and {columns} columns </p>)
  const table = design ? (<BoardTable board={board} />) : null;
  /** try to add listner */
  useEffect(() => {
    if (px > 0 && ArrowUp) {
      setPx(px - 1);
    } else if (px < lines - 1 && ArrowDown) {
      setPx(px + 1);
    } else if (py > 0 && ArrowLeft) {
      setPy(py - 1);
    } else if (py < columns - 1 && ArrowRight) {
      setPy(py + 1);
    }
  }, [ArrowUp, ArrowDown, ArrowLeft, ArrowRight]);
  /** end of try
   * ====================================
   */
  return (

    <>
      {table}
    </>

  );
}
export default Board;
