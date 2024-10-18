import { CellInterface } from '@/interface';

const getNeighbors = (cell: CellInterface, grid: CellInterface[][]) => {
  const neighbors: CellInterface[] = [];
  const { col, row } = cell;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors.filter((neighbor) => !neighbor.isWall && !neighbor.isVisited);
};

export const dijkstra = (
  grid: CellInterface[][],
  startCell: CellInterface,
  endCell: CellInterface
): [CellInterface[], number] => {
  const visitedCells: CellInterface[] = [];
  const unvisitedCells = grid.flat();
  startCell.distanceFromStart = 0;

  while (unvisitedCells.length) {
    unvisitedCells.sort((a, b) => a.distanceFromStart - b.distanceFromStart);
    const closestCell = unvisitedCells.shift();

    if (!closestCell || closestCell.distanceFromStart === Infinity) break;

    closestCell.isVisited = true;
    visitedCells.push(closestCell);

    if (closestCell === endCell) {
      return [visitedCells, performance.now()];
    }

    const neighbors = getNeighbors(closestCell, grid);
    for (const neighbor of neighbors) {
      const distance = closestCell.distanceFromStart + 1;
      if (distance < neighbor.distanceFromStart) {
        neighbor.distanceFromStart = distance;
        neighbor.previousCell = closestCell;
      }
    }
  }

  return [visitedCells, performance.now()];
};