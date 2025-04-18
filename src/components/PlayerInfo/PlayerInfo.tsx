import React from 'react';
import { Player } from '../../utils/types';
import './PlayerInfo.css';
import { PLAYER1, PLAYER2 } from '../../constants/playerConstants';

interface PlayerInfoProps {
  currentPlayer: Player;
}

const PlayerInfo: React.FC<PlayerInfoProps> = ({ currentPlayer }) => {
  return (
    <div className="player-info">
      <div className={`player ${currentPlayer === PLAYER1 ? 'active' : ''}`}>
        <div className="indicator red"></div>
        <span>Player 1</span>
      </div>
      <div className={`player ${currentPlayer === PLAYER2 ? 'active' : ''}`}>
        <div className="indicator black"></div>
        <span>Player 2</span>
      </div>
    </div>
  );
};

export default PlayerInfo;
