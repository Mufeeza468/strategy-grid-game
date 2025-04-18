import React from 'react';
import Board from './components/Board/Board';
import PlayerInfo from './components/PlayerInfo/PlayerInfo';
import './App.css';
import UseBoard from './hooks/useBoard';
import { PLAYER1 } from './constants/playerConstants';

const App: React.FC = () => {
  const { board, currentPlayer, winner, dropChecker, resetGame } = UseBoard();

  return (
    <div className="App">
      <h1>Connect Four</h1>
      <PlayerInfo currentPlayer={currentPlayer} />
      <Board board={board} dropChecker={dropChecker} />
      {winner && (
        <div className="winner">
          {winner === 'Tie' ? (
            <h2>It's a tie!</h2>
          ) : (
            <h2>{winner === PLAYER1  ? 'Player 1' : 'Player 2'} Wins! 🎉 </h2>
          )}
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default App;
