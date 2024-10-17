"use client"

import React, { useState, useCallback, useEffect } from "react";
import { GridBoard } from "@/components/sssp/GridBoard";
import { Dashboard } from "@/components/sssp/Dashboard";
import { dijkstra } from "@/backend/sssp/dijkstra";
import { astar } from "@/backend/sssp/astar";

const ROWS = 20;
const COLS = 40;

const createInitialGrid = () => {
  return Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => ({
      value: 0,
      weight: 0,
      previousNode: null,
    }))
  );
};

export default function PathfindingVisualizer() {
  const [grid, setGrid] = useState(createInitialGrid());
  const [algorithm, setAlgorithm] = useState("dijkstra");
  const [speed, setSpeed] = useState("fast");
  const [startNode, setStartNode] = useState<[number, number] | null>(null);
  const [endNode, setEndNode] = useState<[number, number] | null>(null);
  const [isVisualizing, setIsVisualizing] = useState(false);
  const [isMousePressed, setIsMousePressed] = useState(false);
  const [isSettingStart, setIsSettingStart] = useState(false);
  const [isSettingEnd, setIsSettingEnd] = useState(false);

  const updateGrid = useCallback(
    (row: number, col: number, value: number) => {
      if (isVisualizing) return;
      setGrid((prevGrid) => {
        const newGrid = [...prevGrid];
        newGrid[row][col] = { ...newGrid[row][col], value };
        return newGrid;
      });
    },
    [isVisualizing]
  );

  const handleMouseDown = useCallback(
    (row: number, col: number) => {
      if (isVisualizing) return;
      setIsMousePressed(true);
      if (isSettingStart) {
        setStartNode([row, col]);
        updateGrid(row, col, 2);
        setIsSettingStart(false);
      } else if (isSettingEnd) {
        setEndNode([row, col]);
        updateGrid(row, col, 3);
        setIsSettingEnd(false);
      } else {
        updateGrid(row, col, grid[row][col].value === 0 ? 1 : 0);
      }
    },
    [isVisualizing, isSettingStart, isSettingEnd, grid, updateGrid]
  );

  const handleMouseEnter = useCallback(
    (row: number, col: number) => {
      if (!isMousePressed || isVisualizing) return;
      if (!isSettingStart && !isSettingEnd) {
        updateGrid(row, col, grid[row][col].value === 0 ? 1 : 0);
      }
    },
    [
      isMousePressed,
      isVisualizing,
      isSettingStart,
      isSettingEnd,
      grid,
      updateGrid,
    ]
  );

  const handleMouseUp = useCallback(() => {
    setIsMousePressed(false);
  }, []);

  const clearGrid = useCallback(() => {
    if (isVisualizing) return;
    setGrid(createInitialGrid());
    setStartNode(null);
    setEndNode(null);
  }, [isVisualizing]);

  const setStart = useCallback(() => {
    if (isVisualizing) return;
    setIsSettingStart(true);
    setIsSettingEnd(false);
  }, [isVisualizing]);

  const setEnd = useCallback(() => {
    if (isVisualizing) return;
    setIsSettingEnd(true);
    setIsSettingStart(false);
  }, [isVisualizing]);

  const generateMaze = useCallback(() => {
    if (isVisualizing) return;
    // Implement maze generation algorithm here
  }, [isVisualizing]);

  const visualizeAlgorithm = useCallback(() => {
    if (!startNode || !endNode || isVisualizing) return;

    setIsVisualizing(true);

    const visualize = (
      visitedNodesInOrder: [number, number][],
      shortestPath: [number, number][]
    ) => {
      const speedFactor = speed === "fast" ? 10 : speed === "medium" ? 50 : 100;

      for (let i = 0; i <= visitedNodesInOrder.length; i++) {
        if (i === visitedNodesInOrder.length) {
          setTimeout(() => {
            for (let j = 0; j < shortestPath.length; j++) {
              setTimeout(() => {
                const [row, col] = shortestPath[j];
                updateGrid(row, col, 5);
                if (j === shortestPath.length - 1) {
                  setIsVisualizing(false);
                }
              }, j * speedFactor);
            }
          }, i * speedFactor);
          return;
        }
        setTimeout(() => {
          const [row, col] = visitedNodesInOrder[i];
          updateGrid(row, col, 4);
        }, i * speedFactor);
      }
    };

    const startRow = startNode[0];
    const startCol = startNode[1];
    const endRow = endNode[0];
    const endCol = endNode[1];

    if (algorithm === "dijkstra") {
      const { visitedNodesInOrder, shortestPath } = dijkstra(
        grid,
        startRow,
        startCol,
        endRow,
        endCol
      );
      visualize(visitedNodesInOrder, shortestPath);
    } else if (algorithm === "astar") {
      const { visitedNodesInOrder, shortestPath } = astar(
        grid,
        startRow,
        startCol,
        endRow,
        endCol
      );
      visualize(visitedNodesInOrder, shortestPath);
    }
  }, [algorithm, grid, startNode, endNode, updateGrid, speed, isVisualizing]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "c") clearGrid();
      if (e.key === "s") setStart();
      if (e.key === "e") setEnd();
      if (e.key === "v") visualizeAlgorithm();
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [clearGrid, setStart, setEnd, visualizeAlgorithm, handleMouseUp]);

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center py-4">
        Pathfinding Visualizer
      </h1>
      <Dashboard
        algorithm={algorithm}
        speed={speed}
        updateAlgorithm={setAlgorithm}
        updateSpeed={setSpeed}
        clearGrid={clearGrid}
        setStartNode={setStart}
        setEndNode={setEnd}
        generateMaze={generateMaze}
        visualizeAlgorithm={visualizeAlgorithm}
        isVisualizing={isVisualizing}
      />
      <div className="p-4">
        <GridBoard
          grid={grid}
          rows={ROWS}
          cols={COLS}
          handleMouseDown={handleMouseDown}
          handleMouseEnter={handleMouseEnter}
          handleMouseUp={handleMouseUp}
        />
      </div>
      <div className="text-center mt-4">
        <p>
          Press 'c' to clear, 's' to set start, 'e' to set end, and 'v' to
          visualize
        </p>
      </div>
    </div>
  );
}