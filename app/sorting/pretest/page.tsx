import React from 'react'
import Quiz from '@/quiz/quiz'


const sampleQuestions = [
  {
    question: "What type of data structure is most commonly used to represent a graph for shortest path algorithms?",
    options: ["Array", "Stack", "Binary Tree", "Adjancey List"],
    correctAnswer: "Adjancey List",
    explanation: "An adjacency list is efficient for representing graphs, especially when it comes to algorithms like Dijkstra's or Bellman-Ford. It allows quick access to all neighbors of a given node",
  },
  {
    question: "In graph theory, what is a cycle?",
    options: ["A path that starts and ends at the same node", "A path that connects every pair of nodes in the graph", "A sequence of edges that doesn't revisit any node", "A subgraph that includes all the nodes of the graph"],
    correctAnswer: "A path that starts and ends at the same node",
    explanation: "A cycle in a graph is a path that begins and ends at the same vertex, forming a loop. Recognizing cycles is crucial in certain algorithms, especially when dealing with negative weight edges.",
  },
  {
    question: "What is the difference between a directed graph and an undirected graph?",
    options: ["A directed graph has nodes, but an undirected graph does not", "A directed graph has edges with a direction, while an undirected", "In a directed graph, all edges have weights; in an undirected graph, they do not", "Directed graphs are only used for trees, while undirected graphs are for networks"],
    correctAnswer: "A directed graph has edges with a direction, while an undirected graph's edges do not have a direction",
    explanation: "In a directed graph, edges have a direction indicated by an arrow, showing a one-way relationship between nodes. In an undirected graph, edges have no direction, representing a two-way relationship.",
  },
  {
    question: "What type of data structure is most commonly used to represent a graph for shortest path algorithms?",
    options: ["Array", "Stack", "Binary Tree", "Adjancey List"],
    correctAnswer: "Adjancey List",
    explanation: "An adjacency list is efficient for representing graphs, especially when it comes to algorithms like Dijkstra's or Bellman-Ford. It allows quick access to all neighbors of a given node",
  },
  {
    question: "What is the purpose of using an adjacency matrix in graph representation?",
    options: ["To store the colors of the nodes", "To efficiently find and store the distances between all pairs of nodes", "To represent a list of all edges", "To list all nodes in the graph"],
    correctAnswer: "To efficiently find and store the distances between all pairs of nodes",
    explanation: "An adjacency matrix is a square matrix used to represent a graph, where each cell (i, j) indicates the presence or absence of an edge between nodes i and j, and can store the weight of the edge if present.",
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