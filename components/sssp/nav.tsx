     export function Nav() {
          return (
               <div className="flex items-center justify-center min-h-[2.5rem] border-b shadow-gray-600 sm:px-5 px-0">
                    <div className="flex items-center lg:justify-between juster-center w-full sm:w-full">
                         <h1 className="lg:flex hidden w-[40%] text-xl pl-1">
                              Pathfinding Visualizer
                         </h1>
                    </div>
               </div>
          )
     }

// "use client";
// import React, { useState } from "react";
// import "./navbar.css";

// const brand = window.innerWidth > 600 ? "Pathfinding Visualizer" : "Pathfinder";


// interface NavProps {
//   visualizingAlgorithm: boolean;
//   generatingMaze: boolean;
//   visualizeDijkstra: () => void;
//   visualizeAStar: () => void;
//   visualizeGreedyBFS: () => void;
//   visualizeBidirectionalGreedySearch: () => void;
//   visualizeBFS: () => void;
//   visualizeDFS: () => void;
//   visualizeRandomWalk: () => void;
//   generateRandomMaze: () => void;
//   generateRecursiveDivisionMaze: () => void;
//   generateVerticalMaze: () => void;
//   generateHorizontalMaze: () => void;
//   clearGrid: () => void;
//   clearPath: () => void;
//   updateSpeed: (value1: number, value2: number) => void;
// }

// export function Nav(props: NavProps) {
//   const [algorithm, setAlgorithm] = useState("Visualize Algorithm");
//   const [maze, setMaze] = useState("Generate Maze");
//   const [pathState, setPathState] = useState(false);
//   const [mazeState, setMazeState] = useState(false);
//   const [speedState, setSpeedState] = useState("Speed");

//   const selectAlgorithm = (selection: string) => {
//     if (props.visualizingAlgorithm) {
//       return;
//     }
//     if (
//       selection === algorithm ||
//       algorithm === "Visualize Algorithm" ||
//       algorithm === "Select an Algorithm!"
//     ) {
//       setAlgorithm(selection);
//     } else if (pathState) {
//       clearPath();
//       setAlgorithm(selection);
//     } else {
//       setAlgorithm(selection);
//     }
//   };

//   const selectMaze = (selection: string) => {
//     if (props.visualizingAlgorithm || props.generatingMaze) {
//       return;
//     }
//     if (
//       selection === maze ||
//       maze === "Generate Maze" ||
//       maze === "Select a Maze!"
//     ) {
//       setMaze(selection);
//     } else if (!mazeState) {
//       setMaze(selection);
//     } else {
//       clearGrid();
//       setMaze(selection);
//     }
//   };

//   const visualizeAlgorithm = () => {
//     if (props.visualizingAlgorithm || props.generatingMaze) {
//       return;
//     }
//     if (pathState) {
//       clearTemp();
//       return;
//     }
//     if (algorithm === "Visualize Algorithm" || algorithm === "Select an Algorithm!") {
//       setAlgorithm("Select an Algorithm!");
//     } else {
//       setPathState(true);
//       if (algorithm === "Visualize Dijkstra") props.visualizeDijkstra();
//       else if (algorithm === "Visualize A*") props.visualizeAStar();
//       else if (algorithm === "Visualize Greedy BFS") props.visualizeGreedyBFS();
//       else if (algorithm === "Visualize Bidirectional Greedy") props.visualizeBidirectionalGreedySearch();
//       else if (algorithm === "Visualize Breadth First Search") props.visualizeBFS();
//       else if (algorithm === "Visualize Depth First Search") props.visualizeDFS();
//       else if (algorithm === "Visualize Random Walk") props.visualizeRandomWalk();
//     }
//   };

//   const generateMaze = () => {
//     if (props.visualizingAlgorithm || props.generatingMaze) {
//       return;
//     }
//     if (mazeState || pathState) {
//       clearTemp();
//     }
//     if (maze === "Generate Maze" || maze === "Select a Maze!") {
//       setMaze("Select a Maze!");
//     } else {
//       setMazeState(true);
//       if (maze === "Generate Random Maze") props.generateRandomMaze();
//       else if (maze === "Generate Recursive Maze") props.generateRecursiveDivisionMaze();
//       else if (maze === "Generate Vertical Maze") props.generateVerticalMaze();
//       else if (maze === "Generate Horizontal Maze") props.generateHorizontalMaze();
//     }
//   };

//   const clearGrid = () => {
//     if (props.visualizingAlgorithm || props.generatingMaze) {
//       return;
//     }
//     props.clearGrid();
//     setAlgorithm("Visualize Algorithm");
//     setMaze("Generate Maze");
//     setPathState(false);
//     setMazeState(false);
//   };

//   const clearPath = () => {
//     if (props.visualizingAlgorithm || props.generatingMaze) {
//       return;
//     }
//     props.clearPath();
//     setPathState(false);
//     setMazeState(false);
//   };

//   const clearTemp = () => {
//     if (props.visualizingAlgorithm || props.generatingMaze) {
//       return;
//     }
//     props.clearGrid();
//     setPathState(false);
//     setMazeState(false);
//   };

//   const changeSpeed = (speed: string): void => {
//     if (props.visualizingAlgorithm || props.generatingMaze) {
//       return;
//     }
//     let value = [10, 10];
//     if (speed === "Slow") value = [50, 30];
//     else if (speed === "Medium") value = [25, 20];
//     else if (speed === "Fast") value = [10, 10];
//     setSpeedState(speed);
//     props.updateSpeed(value[0], value[1]);
//   };

//   return (
//     <nav className="navbar navbar-expand navbar-dark bg-dark">
//       <a
//         className="navbar-brand h1 mb-0"
//         href="https://rohithaug.github.io/pathfinding-visualizer/"
//       >
//         {brand}
//       </a>
//       <div className="navbar-collapse" id="navbarNavDropdown">
//         <ul className="navbar-nav">
//           <li className="nav-item dropdown">
//             <div className="dropdown">
//               <button
//                 className="btn btn-light dropdown-toggle"
//                 type="button"
//                 id="dropdownMenu1"
//                 data-toggle="dropdown"
//                 aria-haspopup="true"
//                 aria-expanded="false"
//               >
//                 Algorithms
//               </button>
//               <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
//                 <button
//                   className="dropdown-item btn-light"
//                   type="button"
//                   onClick={() => selectAlgorithm("Visualize Dijkstra")}
//                 >
//                   Dijkstra's Algorithm
//                 </button>
//                 <button
//                   className="dropdown-item btn-light"
//                   type="button"
//                   onClick={() => selectAlgorithm("Visualize A*")}
//                 >
//                   A* Algorithm
//                 </button>
//                 <button
//                   className="dropdown-item btn-light"
//                   type="button"
//                   onClick={() => selectAlgorithm("Visualize Greedy BFS")}
//                 >
//                   Greedy Best First Search
//                 </button>
//                 <button
//                   className="dropdown-item btn-light"
//                   type="button"
//                   onClick={() => selectAlgorithm("Visualize Bidirectional Greedy")}
//                 >
//                   Bidirectional Greedy Search
//                 </button>
//                 <div className="dropdown-divider"></div>
//                 <button
//                   className="dropdown-item btn-light"
//                   type="button"
//                   onClick={() => selectAlgorithm("Visualize Breadth First Search")}
//                 >
//                   Breadth First Search
//                 </button>
//                 <button
//                   className="dropdown-item btn-light"
//                   type="button"
//                   onClick={() => selectAlgorithm("Visualize Depth First Search")}
//                 >
//                   Depth First Search
//                 </button>
//                 <button
//                   className="dropdown-item btn-light"
//                   type="button"
//                   onClick={() => selectAlgorithm("Visualize Random Walk")}
//                 >
//                   Random Walk
//                 </button>
//               </div>
//             </div>
//           </li>
//           <li>
//             <button
//               type="button"
//               className="btn btn-success"
//               onClick={() => visualizeAlgorithm()}
//             >
//               {algorithm}
//             </button>
//           </li>
//           <li className="nav-item dropdown">
//             <div className="dropdown">
//               <button
//                 className="btn btn-light dropdown-toggle"
//                 type="button"
//                 id="dropdownMenu1"
//                 data-toggle="dropdown"
//                 aria-haspopup="true"
//                 aria-expanded="false"
//               >
//                 Mazes
//               </button>
//               <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
//                 <button
//                   className="dropdown-item btn-light"
//                   type="button"
//                   onClick={() => selectMaze("Generate Random Maze")}
//                 >
//                   Random Maze
//                 </button>
//                 <button
//                   className="dropdown-item btn-light"
//                   type="button"
//                   onClick={() => selectMaze("Generate Recursive Maze")}
//                 >
//                   Recursive Division Maze
//                 </button>
//                 <button
//                   className="dropdown-item btn-light"
//                   type="button"
//                   onClick={() => selectMaze("Generate Vertical Maze")}
//                 >
//                   Vertical Division Maze
//                 </button>
//                 <button
//                   className="dropdown-item btn-light"
//                   type="button"
//                   onClick={() => selectMaze("Generate Horizontal Maze")}
//                 >
//                   Horizontal Division Maze
//                 </button>
//               </div>
//             </div>
//           </li>
//           <li>
//             <button
//               type="button"
//               className="btn btn-success"
//               onClick={() => generateMaze()}
//             >
//               {maze}
//             </button>
//           </li>
//           <li>
//             <button
//               type="button"
//               className="btn btn-danger"
//               onClick={() => clearGrid()}
//             >
//               Clear Grid
//             </button>
//           </li>
//           <li className="nav-item dropdown">
//             <div className="dropdown">
//               <button
//                 className="btn btn-info dropdown-toggle"
//                 type="button"
//                 id="dropdownMenu1"
//                 data-toggle="dropdown"
//                 aria-haspopup="true"
//                 aria-expanded="false"
//               >
//                 {speedState}
//               </button>
//               <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
//                 <button
//                   className="dropdown-item btn-light"
//                   type="button"
//                   onClick={() => changeSpeed("Slow")}
//                 >
//                   Slow
//                 </button>
//                 <button
//                   className="dropdown-item btn-light"
//                   type="button"
//                   onClick={() => changeSpeed("Medium")}
//                 >
//                   Medium
//                 </button>
//                 <button
//                   className="dropdown-item btn-light"
//                   type="button"
//                   onClick={() => changeSpeed("Fast")}
//                 >
//                   Fast
//                 </button>
//               </div>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }