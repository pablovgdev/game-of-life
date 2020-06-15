import React, { useContext, useEffect } from "react";
import styles from "../styles/Grid.module.css";
import CellItem from "./CellItem";
import GameContext from "./GameContext";

export interface Cell {
  alive: boolean;
  row: number;
  col: number;
}

export const generateCells = (): Cell[][] => {
  const cells: Cell[][] = [];

  for (let row = 0; row < calculateCells(window.innerHeight); row++) {
    cells.push([]);

    for (let col = 0; col < calculateCells(window.innerWidth); col++) {
      cells[row].push({ alive: false, row, col });
    }
  }

  return cells;
}

export const calculateCells = (screenSize: number) => {
  const gridCellSize = 21; // Cell size + Cell gap
  let cells = 0;
  let cellsPixelSize = 0;

  while (cellsPixelSize + gridCellSize <= screenSize) {
    cellsPixelSize += gridCellSize;
    cells++;
  }

  return cells;
}

const Grid: React.FC = () => {
  const { cells, setCells, run, setRun } = useContext(GameContext);

  useEffect(() => {
    const handleResize = () => {
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
      setCells(generateCells());
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener("resize", handleResize);
  })

  useEffect(() => {
    const getSurroundingCells = (cell: Cell): number => {
      let surroundingCells = 0;

      for (let row = cell.row - 1; row <= cell.row + 1; row++) {
        for (let col = cell.col - 1; col <= cell.col + 1; col++) {
          if (row >= 0 && row < cells.length && col >= 0 && col < cells[0].length) {
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
      const cellsString = JSON.stringify(cells);
      const newCells = JSON.parse(cellsString);

      for (let row = 0; row < cells.length; row++) {
        for (let col = 0; col < cells[0].length; col++) {
          const surroundingCells = getSurroundingCells(cells[row][col]);

          if (
            cells[row][col].alive && (
              surroundingCells < 2 ||
              surroundingCells > 3
            )
          ) {
            newCells[row][col].alive = false;
          } else if (
            !cells[row][col].alive &&
            surroundingCells === 3
          ) {
            newCells[row][col].alive = true;
          }
        }
      }

      if (cellsString === JSON.stringify(newCells)) {
        setRun(false);
      } else {
        setCells(newCells);
      }
    }

    if (run) {
      const interval = setInterval(() => calculate(), 50);
      return () => clearInterval(interval);
    }
  }, [run, cells, setCells, setRun]);

  return (
    <div
      className={styles.grid}
      style={{ gridTemplateColumns: `repeat(${cells[0].length}, 1fr)` }}
    >
      {
        cells.map((row, rowIndex) => {
          return row.map((cell, colIndex) => {
            return (
              <CellItem
                key={rowIndex + "-" + colIndex}
                alive={cell.alive}
                row={rowIndex}
                col={colIndex}
              />
            )
          })
        })
      }
    </div>
  )
}

export default Grid;