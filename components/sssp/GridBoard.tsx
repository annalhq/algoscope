  import React from "react";
  import { GridSquare } from "./GridSquare";

  interface GridBoardProps {
    grid: {
      value: number;
      weight: number;
      previousNode: null | [number, number];
    }[][];
    rows: number;
    cols: number;
    handleMouseDown: (row: number, col: number) => void;
    handleMouseEnter: (row: number, col: number) => void;
    handleMouseUp: () => void;
  }

  export const GridBoard: React.FC<GridBoardProps> = ({
    grid,
    rows,
    cols,
    handleMouseDown,
    handleMouseEnter,
    handleMouseUp,
  }) => {
    return (
      <div className="grid grid-cols-[repeat(40,1fr)] gap-0 w-full max-w-[800px] mx-auto">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <GridSquare
              key={`${rowIndex}-${colIndex}`}
              row={rowIndex}
              col={colIndex}
              value={cell.value}
              onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
              onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
              onMouseUp={handleMouseUp}
            />
          ))
        )}
      </div>
    );
  };