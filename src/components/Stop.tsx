import React, { useContext } from "react";
import styles from "../styles/Run.module.css";
import { generateCells } from "../util/cell";
import GameContext from "./GameContext";

const Stop: React.FC = () => {
  const { setRun, setCells } = useContext(GameContext);

  const onClick = () => () => {
    setRun(false);
    setCells(generateCells());
  }

  return <span className={styles.stop} onClick={onClick()}>⏹</span>
}

export default Stop;