import React from "react";
import { Play, Target, Grid, RefreshCw, Zap } from "lucide-react";

interface DashboardProps {
  algorithm: string;
  speed: string;
  updateAlgorithm: (algo: string) => void;
  updateSpeed: (speed: string) => void;
  clearGrid: () => void;
  setStartNode: () => void;
  setEndNode: () => void;
  generateMaze: () => void;
  visualizeAlgorithm: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  algorithm,
  speed,
  updateAlgorithm,
  updateSpeed,
  clearGrid,
  setStartNode,
  setEndNode,
  generateMaze,
  visualizeAlgorithm,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-100">
      <div className="flex space-x-2 mb-2 md:mb-0">
        <select
          value={algorithm}
          onChange={(e) => updateAlgorithm(e.target.value)}
          className="px-2 py-1 border rounded"
        >
          <option value="dijkstra">Dijkstra Algorithm</option>
          <option value="astar">A* Algorithm</option>
        </select>
        <select
          value={speed}
          onChange={(e) => updateSpeed(e.target.value)}
          className="px-2 py-1 border rounded"
        >
          <option value="fast">Fast</option>
          <option value="medium">Medium</option>
          <option value="slow">Slow</option>
        </select>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={setStartNode}
          className="p-2 bg-green-500 text-white rounded"
        >
          <Play size={16} />
        </button>
        <button
          onClick={setEndNode}
          className="p-2 bg-red-500 text-white rounded"
        >
          <Target size={16} />
        </button>
        <button
          onClick={generateMaze}
          className="p-2 bg-blue-500 text-white rounded"
        >
          <Grid size={16} />
        </button>
        <button
          onClick={clearGrid}
          className="p-2 bg-gray-500 text-white rounded"
        >
          <RefreshCw size={16} />
        </button>
        <button
          onClick={visualizeAlgorithm}
          className="p-2 bg-purple-500 text-white rounded"
        >
          <Zap size={16} />
        </button>
      </div>
    </div>
  );
};
