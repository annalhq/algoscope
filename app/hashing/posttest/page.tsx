"use client"
import React from 'react';
import Quiz from '@/quiz/quiz';

const sampleQuestions = [
  {
    question: "Which of the following properties is essential for a cryptographic hash function?",
    options: [
      "Reversibility","Collision resistance","Linear probing","Open addressing",
    ],
    correctAnswer: "Collision resistance",
    explanation: "Collision resistance ensures that no two different inputs produce the same hash output, which is critical in cryptographic hash functions to prevent data tampering.",
  },
  {
    question: "What is the worst-case time complexity of searching for an element in a hash table that uses separate chaining?",
    options: ["O(1)","O(log n)","O(n)","O(n log n)"],
    correctAnswer: "O(n)",
    explanation: "In the worst case, all elements may hash to the same index, forming a long chain (linked list), which makes the search time linear, i.e., O(n).",
  },
  {
    question: "Which technique is most suitable for dealing with hash collisions in a hash table when memory is a concern?",
    options: [" Separate chaining","Open addressing","Rehashing","Double hashing"],
    correctAnswer: "Open addressing",
    explanation: " Open addressing resolves collisions within the hash table itself, using less memory compared to separate chaining, where extra space is needed for linked lists at each bucket.",
  },
  {
    question: "In a hash table using open addressing, what is the time complexity of inserting an element in the average case?",
    options: ["O(1)","O(log n)","O(n)","O(n^2)"],
    correctAnswer: "O(1)",
    explanation: " In the average case, if the load factor is low, inserting an element in a hash table using open addressing typically takes constant time, O(1), as we find an available spot quickly.",
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