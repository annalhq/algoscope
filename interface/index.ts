export interface CellInterface {
     cellNumber: number;
     col: number;
     row: number;
     isVisited: boolean;
     isWall: boolean;
     isPath: boolean;    
     isStartPoint: boolean;
     isEndPoint: boolean;
     distanceFromStart: number;
     previousCell: CellInterface | null;
     isTarget?: boolean;
}

export enum SearchingAlgoEnum {
     DIJKSTRA = "DIJKSTRA"
}

export interface AlgorithmOption {
     name: string;
     type: SearchingAlgoEnum;
     onClick: () => void;
}