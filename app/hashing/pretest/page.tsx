"use client"
import React from 'react';
import Quiz from '@/quiz/quiz';

const sampleQuestions = [
  {
    question: "What is the primary purpose of a hash function in data structures?",
    options: [
      "Sorting elements",
      "Storing data in linked lists",
      "Mapping data to specific indices for efficient retrieval",
      "Reversing the order of elements",
    ],
    correctAnswer: " Mapping data to specific indices for efficient retrieval",
    explanation: " The primary purpose of a hash function in data structures is to map data (keys) to a specific index in an array (or table) for efficient storage and retrieval. By converting a key into an array index, we can access data in constant time, O(1), under ideal conditions. Hash functions are widely used in hash tables, dictionaries, and sets for this purpose.",
  },
  {
    question: "Which of the following is NOT a common method for resolving hash collisions?",
    options: ["Separate chaining","Open addressing","Quadratic probing","Binary search"],
    correctAnswer: "Binary Search",
    explanation: "Binary search is a searching algorithm, not a collision resolution method. The common methods for resolving hash collisions include: Separate chaining,Open addressing,Quadratic probing",
  },
  {
    question: "What is the time complexity of inserting an element in start and end of a singly linked list respectively?(N = number of elements currently in Linked List)",
    options: ["O(N), O(N)","O(1), O(N)","O(1), O(1)","O(N), O(1)"],
    correctAnswer: "O(1), O(N)",
    explanation: " Inserting an element at the start of a singly linked list takes O(1) time since it involves adjusting the head pointer. However, inserting at the end requires traversing the entire list to find the last node, taking O(N) time (unless a tail pointer is maintained).",
  },
  {
    question: " In which of the following implementations Linked lists can be used ??",
    options: ["To implement file systems.","For separating chaining in hash-tables","To implement non-binary trees.","All of the mentioned."],
    correctAnswer: "All of the mentioned",
    explanation: "All of the mentioned",
  },  
];

const pretestPage = () => {
  return (
    <div>
      <Quiz questions={sampleQuestions} />
    </div>
  );
};

export default pretestPage;