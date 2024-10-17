interface Node {
  row: number;
  col: number;
  distance: number;
  previous: Node | null;
}

export function dijkstra(grid: number[][][], startRow: number, startCol: number, endRow: number, endCol: number) {
  const nodes: Node[][] = [];
  const unvisitedNodes: Node[] = [];

  for (let row = 0; row < grid.length; row++) {
    const currentRow: Node[] = [];
    for (let col = 0; col < grid[0].length; col++) {
      const node: Node = {
        row,
        col,
        distance: Infinity,
        previous: null,
      };
      currentRow.push(node);
      unvisitedNodes.push(node);
    }
    nodes.push(currentRow);
  }

  nodes[startRow][startCol].distance = 0;

  while (unvisitedNodes.length) {
    sortNodesByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift()!;

    if (closestNode.distance === Infinity) return { visitedNodesInOrder: [], shortestPath: [] };

    if (closestNode.row === endRow && closestNode.col === endCol) {
      const visitedNodesInOrder = getVisitedNodesInOrder(nodes);
      const shortestPath = getShortestPath(nodes[endRow][endCol]);
      return { visitedNodesInOrder, shortestPath };
    }

    updateUnvisitedNeighbors(closestNode, grid, nodes);
  }

  return { visitedNodesInOrder: [], shortestPath: [] };
}

function sortNodesByDistance(unvisitedNodes: Node[]) {
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateUnvisitedNeighbors(node: Node, grid: number[][][], nodes: Node[][]) {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid, nodes);
  for (const neighbor of unvisitedNeighbors) {
    neighbor.distance = node.distance + 1;
    neighbor.previous = node;
  }
}

function getUnvisitedNeighbors(node: Node, grid: number[][][], nodes: Node[][]) {
  const neighbors: Node[] = [];
  const { row, col } = node;
  if (row > 0) neighbors.push(nodes[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(nodes[row + 1][col]);
  if (col > 0) neighbors.push(nodes[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(nodes[row][col + 1]);
  return neighbors.filter(neighbor => !isVisited(neighbor, nodes));
}

function isVisited(node: Node, nodes: Node[][]) {
  return nodes[node.row][node.col].distance !== Infinity;
}

function getVisitedNodesInOrder(nodes: Node[][]) {
  const visitedNodesInOrder: [number, number][] = [];
  for (const row of nodes) {
    for (const node of row) {
      if (node.distance !== Infinity) visitedNodesInOrder.push([node.row, node.col]);
    }
  }
  return visitedNodesInOrder;
}

function getShortestPath(finishNode: Node) {
  const shortestPath: [number, number][] = [];
  let currentNode: Node | null = finishNode;
  while (currentNode !== null) {
    shortestPath.unshift([currentNode.row, currentNode.col]);
    currentNode = currentNode.previous;
  }
  return shortestPath;
}
