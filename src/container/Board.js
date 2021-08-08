import React, { useState, useEffect } from "react";
import BoardTable from "../components/BoardTable";

const Board = () => {
  const [lines, setLines] = useState(0);
  const [columns, setColumns] = useState(0);
  const [design, setDesign] = useState(false);

  const boardSize = () => {
    alert("You should save the princess");
    let numL = prompt("Insert the number of lines:");
    setLines(parseInt(numL));
    let numC = prompt("Insert the number of columns:");
    setColumns(parseInt(numC));
    setDesign(true)
  }
  useEffect(() => {
    boardSize();
  }, []);
  //(<p>This board has {lines} lines and {columns} columns </p>)
  let table = design? (<BoardTable lines={lines} columns={columns}/>) : null;
  return (
    <React.Fragment>
      {table}
    </React.Fragment>
  )
}

export default Board;