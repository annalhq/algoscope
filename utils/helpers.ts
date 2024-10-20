import { CellInterface } from '@/interface';

export const getCellObjects = (): CellInterface[][] => {
     const grid: CellInterface[][] = [];

     for (let row = 0; row < 20; row++) {
          const currentRow: CellInterface[] = [];
          for (let col = 0; col < 52; col++) {
               currentRow.push({
                    row,
                    col,
                    cellNumber: row * 52 + col,
                    isStartPoint: false,
                    isEndPoint: false,
                    isWall: false,
                    isVisited: false,
                    isPath: false,
                    distanceFromStart: Infinity,
                    previousCell: null,
               });
          }
          grid.push(currentRow);
     }

     return grid;
};

export const getPath = (endCell: CellInterface): CellInterface[] => {
     const path: CellInterface[] = [];
     let currentCell: CellInterface | null = endCell;

     while (currentCell) {
          path.unshift(currentCell);
          currentCell = currentCell.previousCell;
     }

     return path;
};