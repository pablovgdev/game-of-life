export const MAX_ROWS = 50;
export const MAX_COLS = 100;

export interface Cell {
  alive: boolean;
  row: number;
  col: number;
}

export const generateCells = (): Cell[][] => {
  const cells: Cell[][] = [];
  
  for (let row = 0; row < MAX_ROWS; row++) {
    cells.push([]);

    for (let col = 0; col < MAX_COLS; col++) {
      cells[row].push({alive: false, row, col});  
    }  
  }

  return cells;
} 