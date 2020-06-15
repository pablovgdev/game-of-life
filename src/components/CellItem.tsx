import React, { useContext } from "react";
import styles from "../styles/Cell.module.css";
import GameContext from "./GameContext";

interface CellProps {
  alive: boolean;
  row: number;
  col: number;
}

const CellItem: React.FC<CellProps> = ({ alive, row, col }) => {
  const { cells, setCells, run } = useContext(GameContext);

  const onClick = () => () => {
    if (!run) {
      console.log(row, col);
      const newCells = [...cells];
      newCells[row][col].alive = !cells[row][col].alive;
      setCells(newCells);
    }
  }

  return (
    <div
      className={alive ? styles.alive : styles.dead}
      onClick={onClick()}
    ></div>
  )
}

export default CellItem;