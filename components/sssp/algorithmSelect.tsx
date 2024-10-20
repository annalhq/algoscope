import React from "react";
import { ChevronDown } from "lucide-react";
import { AlgorithmOption, SearchingAlgoEnum } from "@/interface";

interface AlgoSelectProps {
  selectedAlgo: AlgorithmOption | null;
  onSelect: (algo: AlgorithmOption) => void;
}

const algorithms: AlgorithmOption[] = [
  { 
    name: "Dijkstra's Algorithm", 
    type: SearchingAlgoEnum.DIJKSTRA,
    onClick: () => {} // Add an empty onClick function
  }
];

const AlgoSelect: React.FC<AlgoSelectProps> = ({ selectedAlgo, onSelect }) => {
  return (
    <div className="relative">
      <select
        className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        value={selectedAlgo?.type || ""}
        onChange={(e) => {
          const selected = algorithms.find(
            (algo) => algo.type === e.target.value
          );
          if (selected) onSelect(selected);
        }}
      >
        <option value="">Select an algorithm</option>
        {algorithms.map((algo) => (
          <option key={algo.type} value={algo.type}>
            {algo.name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <ChevronDown size={16} />
      </div>
    </div>
  );
};

export default AlgoSelect;
