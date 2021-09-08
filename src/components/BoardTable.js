import Proptypes from 'prop-types';
import styles from '../styles/Boards.module.css';
import mario from '../assets/images/mario.png';
import mashroom from '../assets/images/mashroom.png';

const BoardTable = ({ board }) => {
  const lines = board.length;
  const columns = board[0].length;

  const tbody = [];
  for (let i = 0; i < lines; i += 1) {
    const cells = [];
    for (let j = 0; j < columns; j += 1) {
      let element = null;
      switch (board[i][j]) {
        case 'P':
          element = <img src={mario} alt="Player" />;
          break;
        case 'm':
          element = <img src={mashroom} alt="mashroom" />;
          break;
        default:
          break;
      }
      cells.push(<td className={styles.cell} key={`cell ${i} ${j}`}>{element}</td>);
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
