import React, { useContext } from "react";
import styles from "../styles/Run.module.css";
import GameContext from "./GameContext";
import { generateCells } from "./Grid";

const Stop: React.FC = () => {
  const { setRun, setCells } = useContext(GameContext);

  const onClick = () => () => {
    setRun(false);
    setCells(generateCells());
  }

  return <span className={styles.stop} onClick={onClick()}>⏹</span>
}

export default Stop;