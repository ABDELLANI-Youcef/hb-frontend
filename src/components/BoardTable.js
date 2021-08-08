import Proptypes from 'prop-types';
import styles from '../styles/Boards.module.css';

const BoardTable = ({ lines, columns }) => {
  const tbody = [];
  for (let i = 0; i < lines; i += 1) {
    const cells = [];
    for (let j = 0; j < columns; j += 1) {
      cells.push(<td className={styles.cell} key={`cell ${i} ${j}`} />);
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
      <p>
        This board has
        {lines}
        {' '}
        lines and
        {columns}
        {' '}
        columns
        {' '}
      </p>
      {table}
    </div>
  );
};

BoardTable.propTypes = {
  lines: Proptypes.number.isRequired,
  columns: Proptypes.number.isRequired,
};

export default BoardTable;
