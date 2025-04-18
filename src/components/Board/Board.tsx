import React from 'react';
import { Board as BoardType } from '../../utils/types';
import './Board.css';
import { PLAYER1 } from '../../constants/playerConstants';

interface BoardProps {
  board: BoardType;
  dropChecker: (column: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, dropChecker }) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div key={colIndex} className={`${(rowIndex !== 0) ? "cell-disabled":"cell"}`} onClick={() => {if (rowIndex === 0) dropChecker(colIndex)}}>
              {cell && <div className={`checker ${cell === PLAYER1 ? 'red' : 'black'}`} />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
