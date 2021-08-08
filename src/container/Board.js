import React, { useState, useEffect } from 'react';
import BoardTable from '../components/BoardTable';

const Board = () => {
  const [lines, setLines] = useState(0);
  const [columns, setColumns] = useState(0);
  const [design, setDesign] = useState(false);

  const boardSize = () => {
    alert('You should save the princess');
    const numL = prompt('Insert the number of lines:');
    setLines(parseInt(numL, 10));
    const numC = prompt('Insert the number of columns:');
    setColumns(parseInt(numC, 10));
    setDesign(true);
  };
  useEffect(() => {
    boardSize();
  }, []);
  // (<p>This board has {lines} lines and {columns} columns </p>)
  const table = design ? (<BoardTable lines={lines} columns={columns} />) : null;
  return (
    <>
      {table}
    </>
  );
};

export default Board;
