import React from "react";
import { MapPin, Flag } from "lucide-react";
import { CellInterface } from "@/interface";

interface CellProps {
  cell: CellInterface;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ cell, onClick }) => {
  const getCellClass = () => {
    if (cell.isStartPoint) return "bg-green-500";
    if (cell.isEndPoint) return "bg-red-500";
    if (cell.isWall) return "bg-gray-800";
    if (cell.isPath) return "bg-yellow-400";
    if (cell.isVisited) return "bg-blue-200";
    return "bg-white";
  };

  return (
    <div
      className={`w-6 h-6 border border-gray-200 ${getCellClass()} flex items-center justify-center cursor-pointer`}
      onClick={onClick}
    >
      {cell.isStartPoint && <MapPin size={16} className="text-white" />}
      {cell.isEndPoint && <Flag size={16} className="text-white" />}
    </div>
  );
};

export default Cell;
