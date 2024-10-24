"use client"
import React, { useState, useCallback, useEffect } from "react";

const GRID_ROWS = 20;
const GRID_COLS = 40;

type NodeType = "unvisited" | "wall" | "visited" | "path";
type PlacementMode = "wall" | "start" | "end" | null;

interface Node {
  row: number;
  col: number;
  distance: number;
  isVisited: boolean;
  previousNode: Node | null;
  type: NodeType;
  isWall: boolean;
}

interface Position {
  row: number;
  col: number;
}

export default function PathfindingVisualizer() {
  const [grid, setGrid] = useState<Node[][]>(() => initializeGrid());
  const [startPos, setStartPos] = useState<Position | null>(null);
  const [endPos, setEndPos] = useState<Position | null>(null);
  const [isMousePressed, setIsMousePressed] = useState(false);
  const [placementMode, setPlacementMode] = useState<PlacementMode>(null);

  const clearBoard = useCallback(() => {
    const newGrid = initializeGrid();
    setGrid(newGrid);
    setStartPos(null);
    setEndPos(null);
    setPlacementMode(null);
  }, []);

  const visualizeDijkstra = useCallback(() => {
    if (!startPos || !endPos) {
      alert("Please set both start and end positions before visualizing!");
      return;
    }

    const startNode = grid[startPos.row][startPos.col];
    const endNode = grid[endPos.row][endPos.col];
    const visitedNodesInOrder = dijkstra(grid, startNode, endNode);
    const shortestPath = getNodesInShortestPath(endNode);
    animateAlgorithm(visitedNodesInOrder, shortestPath);
  }, [grid, startPos, endPos]);

  const handleMouseDown = (row: number, col: number) => {
    if (placementMode === "start") {
      // Remove old start position if it exists
      if (startPos) {
        const newGrid = grid.map(gridRow => gridRow.map(node => ({ ...node })));
        newGrid[startPos.row][startPos.col].type = "unvisited";
        setGrid(newGrid);
      }
      setStartPos({ row, col });
      setPlacementMode(null);
    } else if (placementMode === "end") {
      // Remove old end position if it exists
      if (endPos) {
        const newGrid = grid.map(gridRow => gridRow.map(node => ({ ...node })));
        newGrid[endPos.row][endPos.col].type = "unvisited";
        setGrid(newGrid);
      }
      setEndPos({ row, col });
      setPlacementMode(null);
    } else {
      // Only allow wall placement if not placing start/end and not clicking on start/end positions
      if (
        (!startPos || (row !== startPos.row || col !== startPos.col)) &&
        (!endPos || (row !== endPos.row || col !== endPos.col))
      ) {
        const newGrid = toggleWall(grid, row, col);
        setGrid(newGrid);
        setIsMousePressed(true);
      }
    }
  };

  const handleMouseEnter = (row: number, col: number) => {
    if (!isMousePressed) return;
    
    // Only allow wall placement if not clicking on start/end positions
    if (
      (!startPos || (row !== startPos.row || col !== startPos.col)) &&
      (!endPos || (row !== endPos.row || col !== endPos.col))
    ) {
      const newGrid = toggleWall(grid, row, col);
      setGrid(newGrid);
    }
  };

  const handleMouseUp = () => {
    setIsMousePressed(false);
  };

  const toggleWall = (grid: Node[][], row: number, col: number): Node[][] => {
    const newGrid = grid.map((gridRow) => gridRow.map((node) => ({ ...node })));
    const node = newGrid[row][col];
    if (startPos && row === startPos.row && col === startPos.col) return newGrid;
    if (endPos && row === endPos.row && col === endPos.col) return newGrid;
    node.isWall = !node.isWall;
    node.type = node.isWall ? "wall" : "unvisited";
    return newGrid;
  };

  const dijkstra = (grid: Node[][], startNode: Node, endNode: Node): Node[] => {
    const visitedNodesInOrder: Node[] = [];
    startNode.distance = 0;
    const unvisitedNodes = getAllNodes(grid);

    while (unvisitedNodes.length) {
      sortNodesByDistance(unvisitedNodes);
      const closestNode = unvisitedNodes.shift()!;

      if (closestNode.isWall) continue;
      if (closestNode.distance === Infinity) return visitedNodesInOrder;

      closestNode.isVisited = true;
      visitedNodesInOrder.push(closestNode);

      if (closestNode === endNode) return visitedNodesInOrder;

      updateUnvisitedNeighbors(closestNode, grid);
    }

    return visitedNodesInOrder;
  };

  const animateAlgorithm = (
    visitedNodesInOrder: Node[],
    shortestPath: Node[]
  ) => {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          animateShortestPath(shortestPath);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        setGrid((prevGrid) => {
          const newGrid = prevGrid.map((row) =>
            row.map((cell) => ({ ...cell }))
          );
          if (!node.isWall) {
            newGrid[node.row][node.col].type = "visited";
          }
          return newGrid;
        });
      }, 10 * i);
    }
  };

  const animateShortestPath = (nodesInShortestPath: Node[]) => {
    for (let i = 0; i < nodesInShortestPath.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPath[i];
        setGrid((prevGrid) => {
          const newGrid = prevGrid.map((row) =>
            row.map((cell) => ({ ...cell }))
          );
          if (!node.isWall) {
            newGrid[node.row][node.col].type = "path";
          }
          return newGrid;
        });
      }, 50 * i);
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsMousePressed(false);
    };

    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="mb-4 space-x-4">
        <button
          onClick={clearBoard}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Clear Board
        </button>
        <button
          onClick={() => setPlacementMode("start")}
          className={`px-4 py-2 text-white rounded ${
            placementMode === "start" ? "bg-green-600" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          Place Start
        </button>
        <button
          onClick={() => setPlacementMode("end")}
          className={`px-4 py-2 text-white rounded ${
            placementMode === "end" ? "bg-red-600" : "bg-red-500 hover:bg-red-600"
          }`}
        >
          Place End
        </button>
        <button
          onClick={visualizeDijkstra}
          className="px-4 py-2 bg-purple-500 text-black rounded hover:bg-purple-600 disabled:bg-gray-400"
          disabled={!startPos || !endPos}
        >
          Visualize Dijkstra
        </button>
      </div>

      <div className="mb-4 text-sm">
        {placementMode === "start" && "Click any cell to place the start position"}
        {placementMode === "end" && "Click any cell to place the end position"}
        {!placementMode && "Click and drag to create walls"}
      </div>

      <div
        className="grid gap-0.5 bg-gray-200 p-2 rounded"
        onMouseLeave={() => setIsMousePressed(false)}
      >
        {grid.map((row, rowIdx) => (
          <div key={rowIdx} className="flex gap-0.5">
            {row.map((node, colIdx) => (
              <div
                key={`${rowIdx}-${colIdx}`}
                className={`
                  w-6 h-6 
                  ${getCellClassName(rowIdx, colIdx, startPos, endPos, node)}
                  cursor-pointer
                `}
                onMouseDown={() => handleMouseDown(rowIdx, colIdx)}
                onMouseEnter={() => handleMouseEnter(rowIdx, colIdx)}
                onMouseUp={handleMouseUp}
                onDragStart={(e) => e.preventDefault()}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function initializeGrid(): Node[][] {
  const grid = [];
  for (let row = 0; row < GRID_ROWS; row++) {
    const currentRow = [];
    for (let col = 0; col < GRID_COLS; col++) {
      currentRow.push({
        row,
        col,
        distance: Infinity,
        isVisited: false,
        previousNode: null,
        type: "unvisited" as NodeType,
        isWall: false,
      });
    }
    grid.push(currentRow);
  }
  return grid;
}

function getCellClassName(
  row: number,
  col: number,
  startPos: Position | null,
  endPos: Position | null,
  node: Node
): string {
  if (startPos && row === startPos.row && col === startPos.col) {
    return "bg-green-500 transition-colors";
  }
  if (endPos && row === endPos.row && col === endPos.col) {
    return "bg-red-500 transition-colors";
  }
  if (node.isWall) {
    return "bg-gray-800 transition-colors";
  }
  switch (node.type) {
    case "visited":
      return "bg-blue-300 transition-colors";
    case "path":
      return "bg-yellow-400 transition-colors";
    default:
      return "bg-white transition-colors hover:bg-gray-300";
  }
}

function getAllNodes(grid: Node[][]): Node[] {
  const nodes: Node[] = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
}

function sortNodesByDistance(nodes: Node[]): void {
  nodes.sort((a, b) => a.distance - b.distance);
}

function updateUnvisitedNeighbors(node: Node, grid: Node[][]): void {
  const neighbors = getNeighbors(node, grid);
  for (const neighbor of neighbors) {
    neighbor.distance = node.distance + 1;
    neighbor.previousNode = node;
  }
}

function getNeighbors(node: Node, grid: Node[][]): Node[] {
  const neighbors: Node[] = [];
  const { row, col } = node;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (const [dRow, dCol] of directions) {
    const newRow = row + dRow;
    const newCol = col + dCol;

    if (
      newRow >= 0 &&
      newRow < grid.length &&
      newCol >= 0 &&
      newCol < grid[0].length &&
      !grid[newRow][newCol].isVisited
    ) {
      neighbors.push(grid[newRow][newCol]);
    }
  }

  return neighbors;
}

function getNodesInShortestPath(endNode: Node): Node[] {
  const nodesInShortestPath: Node[] = [];
  let currentNode: Node | null = endNode;
  while (currentNode !== null) {
    nodesInShortestPath.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPath;
}