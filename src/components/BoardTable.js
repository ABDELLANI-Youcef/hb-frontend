import Proptypes from 'prop-types';
import styles from '../styles/Boards.module.css';

const BoardTable = ({ board }) => {
  const lines = board.length;
  const columns = board[0].length;

  const tbody = [];
  for (let i = 0; i < lines; i += 1) {
    const cells = [];
    for (let j = 0; j < columns; j += 1) {
      cells.push(<td className={styles.cell} key={`cell ${i} ${j}`}>{board[i][j]}</td>);
    }
    const row = <tr key={`row ${i}`}>{cells}</tr>;
    tbody.push(row);
  }
  const table = (
    <table>
      <tbody>
        {tbody}
      </tbody>
    </table>
  );
  return (
    <div>
      {table}
    </div>
  );
};

BoardTable.propTypes = {
  board: Proptypes.arrayOf(Proptypes.any).isRequired,
};

export default BoardTable;
