import { CellInterface } from '@/interface';

export const generateRandomMaze = (grid: CellInterface[][]): CellInterface[][] => {
     const newGrid = grid.map((row) =>
          row.map((cell) => ({
               ...cell,
               isWall: Math.random() < 0.3,
               isStartPoint: false,
               isEndPoint: false,
               isVisited: false,
               isPath: false,
               distanceFromStart: Infinity,
               previousCell: null,
          }))
     );

     return newGrid;
};