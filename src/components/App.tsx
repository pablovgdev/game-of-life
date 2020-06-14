import React, { useState } from 'react';
import { generateCells } from '../util/cell';
import GameContext from './GameContext';
import Grid from './Grid';
import Run from './Run';
import Stop from './Stop';

const App: React.FC = () => {
  const [cells, setCells] = useState(generateCells());
  const [run, setRun] = useState(false);
  const context = { cells, setCells, run, setRun };

  return (
    <GameContext.Provider value={context}>
      <Run />
      <Stop />
      <Grid />
    </GameContext.Provider>
  );
}

export default App;
