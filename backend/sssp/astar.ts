interface Node {
  row: number;
  col: number;
  f: number;
  g: number;
  h: number;
  previous: Node | null;
}

export function astar(grid: number[][][], startRow: number, startCol: number, endRow: number, endCol: number) {
  const nodes: Node[][] = [];
  const openSet: Node[] = [];
  const closedSet: Node[] = [];

  for (let row = 0; row < grid.length; row++) {
    const currentRow: Node[] = [];
    for (let col = 0; col < grid[0].length; col++) {
      const node: Node = {
        row,
        col,
        f: 0,
        g: 0,
        h: 0,
        previous: null,
      };
      currentRow.push(node);
    }
    nodes.push(currentRow);
  }

  const startNode = nodes[startRow][startCol];
  const endNode = nodes[endRow][endCol];
  openSet.push(startNode);

  while (openSet.length > 0) {
    let currentNode = openSet[0];
    let currentIndex = 0;

    for (let i = 1; i < openSet.length; i++) {
      if (openSet[i].f < currentNode.f) {
        currentNode = openSet[i];
        currentIndex = i;
      }
    }

    openSet.splice(currentIndex, 1);
    closedSet.push(currentNode);

    if (currentNode === endNode) {
      const path = [];
      let current: Node | null = currentNode;
      while (current !== null) {
        path.push([current.row, current.col]);
        current = current.previous;
      }
      return {
        visitedNodesInOrder: closedSet.map(node => [node.row, node.col]),
        shortestPath: path.reverse(),
      };
    }

    const neighbors = getNeighbors(currentNode, grid, nodes);

    for (const neighbor of neighbors) {
      if (closedSet.includes(neighbor)) continue;

      const tentativeGScore = currentNode.g + 1;

      if (!openSet.includes(neighbor)) {
        openSet.push(neighbor);
      } else if (tentativeGScore >= neighbor.g) {
        continue;
      }

      neighbor.previous = currentNode;
      neighbor.g = tentativeGScore;
      neighbor.h = heuristic(neighbor, endNode);
      neighbor.f = neighbor.g + neighbor.h;
    }
  }

  return { visitedNodesInOrder: [], shortestPath: [] };
}

function getNeighbors(node: Node, grid: number[][][], nodes: Node[][]) {
  const neighbors: Node[] = [];
  const { row, col } = node;
  if (row > 0 && grid[row - 1][col][0] !== 1) neighbors.push(nodes[row - 1][col]);
  if (row < grid.length - 1 && grid[row + 1][col][0] !== 1) neighbors.push(nodes[row + 1][col]);
  if (col > 0 && grid[row][col - 1][0] !== 1) neighbors.push(nodes[row][col - 1]);
  if (col < grid[0].length - 1 && grid[row][col + 1][0] !== 1) neighbors.push(nodes[row][col + 1]);
  return neighbors;
}

function heuristic(a: Node, b: Node) {
  return Math.abs(a.row - b.row) + Math.abs(a.col - b.col);
}
