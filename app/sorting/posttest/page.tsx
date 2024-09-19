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
  {
    question: "Let e = v → w be an edge with weight 17.0. Suppose that during the generic shortest paths algorithm, distTo[v] = ∞ and distTo[w] = 15.0. What will distTo[w] be after calling relax(e)?",
    options: ["The program will encounter a Java runtime exception", "15.0", "17.0", "∞"],
    correctAnswer: "Greedy algorithm",
    explanation: "If distTo[v] = ∞, then relaxing any edge pointing from v will have no effect since, in Java (and IEEE floating point), ∞+x=∞ unless x is −∞ or NaN.",
  },
  {
    question: "What is the order of growth of Dijkstra's algorithm if we use an ordered array for the PQ? Assume there are no self-edges or parallel edges.",
    options: ["V", "EV", "V²", "E(logV)"],
    correctAnswer: "EV",
    explanation: "With respect to the PQ, there are V insert operations, V delete-min operations, and E decrease-key operations. The PQ is at most size V.",
  },
  {
    question: "Chan’s algorithm is used for computing: ",
    options: ["Shortest path between two points", "Convex hull", " Area of a polygon", "Closest distance between two points"],
    correctAnswer: "Convex hull",
    explanation: "Chan’s algorithm is an output-sensitive algorithm used to compute the convex hull set of n points in a 2D or 3D space. Closest pair algorithm is used to compute the closest distance between two points.",
  },
]


const postTestPage = () => {
  return (
    <div>
    <Quiz questions={sampleQuestions} />
  </div>
  )
}

export default postTestPage