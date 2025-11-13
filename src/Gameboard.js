import React from 'react';
import { useGame } from '../contexts/GameContext';
import Hole from './Hole';

const GameBoard = () => {
  const { score, restartGame, molePosition, TOTAL_HOLES } = useGame();

  const holes = Array.from({ length: TOTAL_HOLES }, (_, index) => (
    <Hole 
      key={index}
      hasMole={index === molePosition}
      index={index}
    />
  ));

  return (
    <div className="game-board">
      <div className="game-header">
        <div className="score">Score: {score}</div>
        <button className="restart-button" onClick={restartGame}>
          Restart
        </button>
      </div>
      <div className="holes-grid">
        {holes}
      </div>
    </div>
  );
};

export default GameBoard;