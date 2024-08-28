import React from 'react'
import Quiz from '@/quiz/quiz'

const sampleQuestions = [
  {
    question: "To implement Dijkstra’s shortest path algorithm on unweighted graphs so that it runs in linear time, the data structure to be used is:",
    options: ["Queue", "Stack", "Heap", "B-Tree"],
    correctAnswer: "Queue",
    explanation: "The shortest path in an un-weighted graph means the smallest number of edges that must be traversed in order to reach the destination in the graph. This is the same problem as solving the weighted version where all the weights happen to be 1. If we use Queue (FIFO) instead of Priority Queue (Min Heap), we get the shortest path in linear time O(|V| + |E|). Basically we do BFS traversal of the graph to get the shortest paths.",
  },
  {
    question: " Dijkstra’s algorithm cannot be applied on:",
    options: ["Directed and weighted graphs", "Container of objects of similar types", "Container of objects of mixed types", "All of the mentioned"],
    correctAnswer: "Container of objects of similar types",
    explanation: "Container of objects of similar types",
  },
  {
    question: "Dijkstra’s Algorithm is the prime example for:",
    options: ["Greedy algorithm", "Branch and bound", "Back tracking", "Dynamic programming"],
    correctAnswer: "Greedy algorithm",
    explanation: "Because greedy algorithms generally solve a problem in stages by doing what appears to be the best thing at each stage",
  },
];

const pretestPage = () => {
  return (
  <div>
    <Quiz questions={sampleQuestions} />
  </div>
  )
}

export default pretestPage