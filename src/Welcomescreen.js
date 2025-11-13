import React from 'react';
import { useGame } from '../contexts/GameContext';

const WelcomeScreen = () => {
  const { startGame, highScores } = useGame();

  return (
    <div className="welcome-screen">
      <h1>Whack a Mole!</h1>
      <div className="instructions">
        <h2>Instructions</h2>
        <p>Click on the mole as it appears in different holes.</p>
        <p>Each successful whack scores 1 point!</p>
        <p>Be quick and see how many points you can get!</p>
      </div>
      
      {highScores.length > 0 && (
        <div className="high-scores">
          <h3>High Scores</h3>
          <ol>
            {highScores.map((score, index) => (
              <li key={index}>{score}</li>
            ))}
          </ol>
        </div>
      )}
      
      <button className="play-button" onClick={startGame}>
        Play Game
      </button>
    </div>
  );
};

export default WelcomeScreen;