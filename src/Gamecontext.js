import React, { createContext, useContext, useState, useCallback } from 'react';

const GameContext = createContext();

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState('welcome'); // 'welcome', 'playing'
  const [score, setScore] = useState(0);
  const [molePosition, setMolePosition] = useState(null);
  const [highScores, setHighScores] = useState([]);

  const TOTAL_HOLES = 9;

  const startGame = useCallback(() => {
    setGameState('playing');
    setScore(0);
    // Set initial random mole position
    setMolePosition(Math.floor(Math.random() * TOTAL_HOLES));
  }, []);

  const restartGame = useCallback(() => {
    // Save score to high scores if it's greater than 0
    if (score > 0) {
      setHighScores(prev => {
        const newScores = [...prev, score].sort((a, b) => b - a).slice(0, 5);
        return newScores;
      });
    }
    setGameState('welcome');
  }, [score]);

  const whackMole = useCallback(() => {
    if (gameState !== 'playing') return;
    
    setScore(prev => prev + 1);
    
    // Move mole to new random position (different from current)
    let newPosition;
    do {
      newPosition = Math.floor(Math.random() * TOTAL_HOLES);
    } while (newPosition === molePosition);
    
    setMolePosition(newPosition);
  }, [gameState, molePosition]);

  const value = {
    gameState,
    score,
    molePosition,
    highScores,
    startGame,
    restartGame,
    whackMole,
    TOTAL_HOLES
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};