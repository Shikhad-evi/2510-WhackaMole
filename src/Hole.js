import React from 'react';
import { useGame } from '../contexts/GameContext';

const Hole = ({ hasMole, index }) => {
  const { whackMole } = useGame();

  const handleClick = () => {
    if (hasMole) {
      whackMole();
    }
  };

  return (
    <div 
      className={`hole ${hasMole ? 'with-mole' : ''}`}
      onClick={handleClick}
      data-testid={`hole-${index}`}
    >
      <div className="hole-top"></div>
    </div>
  );
};

export default Hole;