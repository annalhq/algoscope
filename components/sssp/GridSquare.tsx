import React from "react";

interface GridSquareProps {
  row: number;
  col: number;
  value: number;
  onMouseDown: () => void;
  onMouseEnter: () => void;
  onMouseUp: () => void;
}

export const GridSquare: React.FC<GridSquareProps> = ({
  row,
  col,
  value,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
}) => {
  const getBackgroundColor = () => {
    switch (value) {
      case 1:
        return "bg-blue-500"; // Wall
      case 2:
        return "bg-green-500"; // Start
      case 3:
        return "bg-red-500"; // End
      case 4:
        return "bg-yellow-200"; // Visited
      case 5:
        return "bg-purple-500"; // Path
      default:
        return "bg-white";
    }
  };

  return (
    <div
      id={`node-${row}-${col}`}
      className={`w-5 h-5 border border-gray-200 ${getBackgroundColor()} transition-colors duration-300`}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseUp={onMouseUp}
    />
  );
};
