import React, { useState } from 'react';
import styles from "../styles/App.module.css";
import GameContext from './GameContext';
import Grid, { generateCells } from './Grid';
import Run from './Run';
import Stop from './Stop';

const App: React.FC = () => {
  const [cells, setCells] = useState(generateCells());
  const [run, setRun] = useState(false);
  const context = { cells, setCells, run, setRun };

  return (
    <div className={styles.app}>
      <GameContext.Provider value={context}>
        <Run />
        <Stop />
        <Grid />
      </GameContext.Provider>
    </div>
  );
}

export default App;
