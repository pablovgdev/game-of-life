import React from "react";
import { Cell } from "./Grid";

export interface IGameContext {
  cells: Cell[][];
  setCells: React.Dispatch<React.SetStateAction<Cell[][]>>;
  run: boolean;
  setRun: React.Dispatch<React.SetStateAction<boolean>>;
}

const GameContext = React.createContext({} as IGameContext);

export default GameContext;
