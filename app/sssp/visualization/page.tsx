"use client";
import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RefreshCw, ChevronDown } from "lucide-react";
import { dijkstra } from "@/backend/sssp/dijkstra";
import { generateRandomMaze } from "@/backend/sssp/randomMazeGeneration";
import { getCellObjects, getPath } from "@/utils/helpers";
import Cell from "@/components/sssp/cell";
import AlgoSelect from "@/components/sssp/algorithmSelect";
import {
  CellInterface,
  SearchingAlgoEnum,
  AlgorithmOption,
} from "@/interface";

const PathfindingVisualizer: React.FC = () => {
  const [grid, setGrid] = useState<CellInterface[][]>([]);
  const [startPoint, setStartPoint] = useState<CellInterface | null>(null);
  const [endPoint, setEndPoint] = useState<CellInterface | null>(null);
  const [selectedAlgo, setSelectedAlgo] = useState<AlgorithmOption | null>(
    null
  );
  const [isVisualizing, setIsVisualizing] = useState(false);
  const [cellsVisited, setCellsVisited] = useState(0);
  const [pathLength, setPathLength] = useState(0);
  const [executionTime, setExecutionTime] = useState(0);

  useEffect(() => {
    resetGrid();
  }, []);

  const resetGrid = () => {
    const newGrid = getCellObjects();
    setGrid(newGrid);
    setStartPoint(null);
    setEndPoint(null);
    setCellsVisited(0);
    setPathLength(0);
    setExecutionTime(0);
  };

  const handleCellClick = (cell: CellInterface) => {
    if (isVisualizing) return;

    const newGrid = [...grid];
    const clickedCell = newGrid[cell.row][cell.col];

    if (!startPoint) {
      clickedCell.isStartPoint = true;
      setStartPoint(clickedCell);
    } else if (!endPoint && !clickedCell.isStartPoint) {
      clickedCell.isEndPoint = true;
      setEndPoint(clickedCell);
    } else if (!clickedCell.isStartPoint && !clickedCell.isEndPoint) {
      clickedCell.isWall = !clickedCell.isWall;
    }

    setGrid(newGrid);
  };

  const visualizeAlgorithm = () => {
    if (!startPoint || !endPoint || !selectedAlgo) return;

    setIsVisualizing(true);
    const startTime = performance.now();

    const [visitedCells, endTime] = dijkstra(grid, startPoint, endPoint);
    const path = getPath(endPoint);

    animateAlgorithm(visitedCells, path, endTime - startTime, startTime);
  };

  const animateAlgorithm = (
    visitedCells: CellInterface[],
    path: CellInterface[],
    time: number,
    startTime: number
  ) => {    for (let i = 0; i <= visitedCells.length; i++) {
      if (i === visitedCells.length) {
        setTimeout(() => {
          animatePath(path, startTime);
        }, 10 * i);
        return;
      }

      setTimeout(() => {
        const cell = visitedCells[i];
        const newGrid = [...grid];
        const visitedCell = newGrid[cell.row][cell.col];
        visitedCell.isVisited = true;
        setGrid(newGrid);
        setCellsVisited(i + 1);
      }, 10 * i);
    }
  };

  const animatePath = (path: CellInterface[], startTime: number) => {
    for (let i = 0; i < path.length; i++) {
      setTimeout(() => {
        const cell = path[i];
        const newGrid = [...grid];
        const pathCell = newGrid[cell.row][cell.col];
        pathCell.isPath = true;
        setGrid(newGrid);
        setPathLength(i + 1);

        if (i === path.length - 1) {
          setIsVisualizing(false);
          setExecutionTime(performance.now() - startTime);
        }
      }, 50 * i);
    }
  };

  const generateMaze = () => {
    if (isVisualizing) return;
    const newGrid = generateRandomMaze(getCellObjects());
    setGrid(newGrid);
    setStartPoint(null);
    setEndPoint(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Pathfinding Visualizer</h1>
      <div className="flex space-x-4 mb-4">
        <AlgoSelect selectedAlgo={selectedAlgo} onSelect={setSelectedAlgo} />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
          onClick={visualizeAlgorithm}
          disabled={!startPoint || !endPoint || !selectedAlgo || isVisualizing}
        >
          {isVisualizing ? (
            <Pause className="mr-2" />
          ) : (
            <Play className="mr-2" />
          )}
          {isVisualizing ? "Pause" : "Visualize"}
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center"
          onClick={generateMaze}
          disabled={isVisualizing}
        >
          <RefreshCw className="mr-2" />
          Generate Maze
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center"
          onClick={resetGrid}
          disabled={isVisualizing}
        >
          <RefreshCw className="mr-2" />
          Reset Grid
        </button>
      </div>
      <div className="grid grid-cols-[repeat(52,_minmax(0,_1fr))] gap-0 mb-4">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              cell={cell}
              onClick={() => handleCellClick(cell)}
            />
          ))
        )}
      </div>
      <div className="flex justify-between text-sm">
        <p>Cells visited: {cellsVisited}</p>
        <p>Path length: {pathLength}</p>
        <p>Execution time: {executionTime.toFixed(2)} ms</p>
      </div>
    </div>
  );
};

export default PathfindingVisualizer;
