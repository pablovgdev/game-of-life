import React, { useContext, useEffect } from "react";
import styles from "../styles/Grid.module.css";
import { Cell, MAX_COLS, MAX_ROWS } from "../util/cell";
import CellItem from "./CellItem";
import GameContext from "./GameContext";

const Grid: React.FC = () => {
  const { cells, setCells, run } = useContext(GameContext);

  useEffect(() => {
    const getSurroundingCells = (cell: Cell): number => {
      let surroundingCells = 0;

      for (let row = cell.row - 1; row <= cell.row + 1; row++) {
        for (let col = cell.col - 1; col <= cell.col + 1; col++) {
          if (row >= 0 && row < MAX_ROWS && col >= 0 && col < MAX_COLS) {
            if (cells[row][col].alive) {
              if (row === cell.row && col === cell.col) {
                continue;
              } else {
                surroundingCells++;
              }
            }
          }
        }
      }

      return surroundingCells;
    }

    const calculate = () => {
      const newCells = JSON.parse(JSON.stringify(cells));

      for (let row = 0; row < MAX_ROWS; row++) {
        for (let col = 0; col < MAX_COLS; col++) {
          const surroundingCells = getSurroundingCells(cells[row][col]);

          if (cells[row][col].alive && (surroundingCells < 2 || surroundingCells > 3)) {
            newCells[row][col].alive = false;
          } else if (!cells[row][col].alive && surroundingCells === 3) {
            newCells[row][col].alive = true;
          }
        }
      }

      setCells(newCells);
    }

    if (run) {
      const interval = setInterval(() => calculate(), 100);
      return () => clearInterval(interval);
    }
  }, [run, cells, setCells]);

  return (
    <div className={styles.grid}>
      {
        cells.map((row, rowIndex) => {
          return row.map((cell, colIndex) => {
            return <CellItem key={rowIndex + "-" + colIndex} alive={cell.alive} row={rowIndex} col={colIndex} />
          })
        })
      }
    </div>
  )
}

export default Grid;