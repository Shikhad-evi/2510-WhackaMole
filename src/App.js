import React from 'react';
import { GameProvider, useGame } from './contexts/GameContext';
import WelcomeScreen from './components/WelcomeScreen';
import GameBoard from './components/GameBoard';
import './App.css';

const GameContent = () => {
  const { gameState } = useGame();

  return (
    <div className="app">
      {gameState === 'welcome' ? <WelcomeScreen /> : <GameBoard />}
    </div>
  );
};

function App() {
  return (
    <GameProvider>
      <GameContent />
    </GameProvider>
  );
}

export default App;