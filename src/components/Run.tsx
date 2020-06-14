import React, { useContext } from "react";
import GameContext from "./GameContext";
import styles from "../styles/Run.module.css";

const Run: React.FC = () => {
  const { run, setRun } = useContext(GameContext);

  const onClick = () => () => {
    setRun(!run);
  }

  return <span className={styles.run} onClick={onClick()}>{run ? "⏸" : "▶️"}</span>
}

export default Run;