import { useState } from "react";
import { checkForWinner } from "../utils/checkWinner";
import type { Board as BoardType, Player } from '../utils/types';
import { PLAYER1, PLAYER2} from '../constants/playerConstants'

const UseBoard=()=>{

const [board, setBoard] = useState<BoardType>(Array(6).fill(Array(7).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState<Player>(PLAYER1);
  const [winner, setWinner] = useState<Player | 'Tie' | null>(null);

  const dropChecker = (column: number) => {
    if (winner) return;
    const newBoard = board.map(row => [...row]);
    for (let row = 5; row >= 0; row--) {
      if (!newBoard[row][column]) {
        newBoard[row][column] = currentPlayer;
        setBoard(newBoard);
        if (checkForWinner(newBoard, row, column, currentPlayer)) {
          setWinner(currentPlayer);
        } else if (newBoard.every(row => row.every(cell => cell !== null))) {
          setWinner('Tie');
        } else {
          setCurrentPlayer(currentPlayer === PLAYER1 ? PLAYER2 : PLAYER1);
        }
        return;
      }
    }
  };

  const resetGame = () => {
    setBoard(Array(6).fill(Array(7).fill(null)));
    setCurrentPlayer(PLAYER1);
    setWinner(null);
  };

  return {board,currentPlayer,winner,resetGame,dropChecker}
}

export default UseBoard;