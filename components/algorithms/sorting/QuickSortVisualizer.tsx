"use client"

import React, { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const QuickSortVisualizer = () => {
  const [array, setArray] = useState<number[]>([]);
  const [speed, setSpeed] = useState<number>(50);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const newArray = Array.from({ length: 20 }, () => 
      Math.floor(Math.random() * 100) + 1
    );
    setArray(newArray);
    setIsRunning(false);
  };

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const quickSort = async (arr: number[], low: number, high: number) => {
    if (low < high) {
      const pi = await partition(arr, low, high);
      await quickSort(arr, low, pi - 1);
      await quickSort(arr, pi + 1, high);
    }
    return arr;
  };

  const partition = async (arr: number[], low: number, high: number) => {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        // Swap elements
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray([...arr]);
        await delay(100 - speed); // Speed control
      }
    }

    // Place pivot in correct position
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setArray([...arr]);
    await delay(100 - speed);
    
    return i + 1;
  };

  const startSorting = async () => {
    setIsRunning(true);
    const arrCopy = [...array];
    await quickSort(arrCopy, 0, arrCopy.length - 1);
    setIsRunning(false);
  };

  return (
    <Card className="p-6 w-full max-w-4xl mx-auto">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="space-x-2">
            <Button 
              onClick={resetArray}
              disabled={isRunning}
            >
              Reset Array
            </Button>
            <Button 
              onClick={startSorting}
              disabled={isRunning}
            >
              Start Sorting
            </Button>
          </div>
          <div className="w-48">
            <label className="block text-sm font-medium mb-2">Speed</label>
            <Slider
              value={[speed]}
              onValueChange={(value) => setSpeed(value[0])}
              min={0}
              max={95}
              step={5}
              disabled={isRunning}
            />
          </div>
        </div>
        
        <div className="h-64 flex items-end justify-around border-b border-gray-200">
          {array.map((value, idx) => (
            <div
              key={idx}
              className="w-4 bg-blue-500 transition-all duration-200"
              style={{
                height: `${value}%`,
              }}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default QuickSortVisualizer;