import { Board, Player } from './types';

export const checkForWinner = (board: Board, row: number, col: number, player: Player): boolean => {
  const directions = [
    { rowDir: 0, colDir: 1 },  // Horizontal right
    { rowDir: 1, colDir: 0 },  // Vertical down
    { rowDir: 1, colDir: 1 },  // Diagonal down-right
    { rowDir: 1, colDir: -1 }  // Diagonal down-left
  ];

  return directions.some(direction => 
    countConsecutive(board, row, col, player, direction.rowDir, direction.colDir) +
    countConsecutive(board, row, col, player, -direction.rowDir, -direction.colDir) >= 3
  );
};

const countConsecutive = (board: Board, row: number, col: number, player: Player, rowDir: number, colDir: number): number => {
  let count = 0;

  for (let i = 1; i < 4; i++) {
    const newRow = row + i * rowDir;
    const newCol = col + i * colDir;

    // Stop if out of bounds or the cell doesn't contain the player's checker
    if (newRow < 0 || newRow >= 6 || newCol < 0 || newCol >= 7 || board[newRow][newCol] !== player) break;

    count++;
  }

  return count;
};
