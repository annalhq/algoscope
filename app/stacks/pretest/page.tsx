import React from 'react';
import Quiz from '@/quiz/quiz';

const sampleQuestions = [
  {
    question: "What is a stack in data structures?",
    options: [
      "A collection of elements in which insertion and deletion take place at opposite ends",
      "A collection of elements in which insertion and deletion take place at the same end",
      "A collection where elements can be accessed randomly",
      "A collection where the middle element is accessed directly",
    ],
    correctAnswer: "A collection of elements in which insertion and deletion take place at the same end",
    explanation: "In a stack, elements follow the Last In First Out (LIFO) principle, where both insertion (push) and deletion (pop) occur at the same end, called the top of the stack.",
  },
  {
    question: "Which of the following is the correct acronym for stack operations?",
    options: ["FIFO (First In First Out)", "LIFO (Last In First Out)", "FILO (First In Last Out)", "LILO (Last In Last Out)"],
    correctAnswer: "LIFO (Last In First Out)",
    explanation: "LIFO (Last In First Out) is the defining characteristic of a stack, where the last element added is the first one to be removed.",
  },
  {
    question: "In a stack, which operation is used to insert an element?",
    options: ["Enqueue", "Push", "Insert", "Add"],
    correctAnswer: "Push",
    explanation: "The 'push' operation adds an element to the top of the stack.",
  },
  {
    question: "In a stack, which operation is used to remove the top element?",
    options: ["Pop", "Dequeue", "Remove", "Delete"],
    correctAnswer: "Pop",
    explanation: "The 'pop' operation removes the element from the top of the stack.",
  },

  {
    question: "What does the term ‘overflow’ mean in the context of stacks?",
    options: [
      "When an element is popped from an empty stack",
      "When the stack is full and another element is pushed",
      "When the stack is used in recursion",
      "When the stack size becomes zero",
    ],
    correctAnswer: "When the stack is full and another element is pushed",
    explanation: "Overflow occurs when a push operation is attempted on a full stack.",
  },
  {
    question: "What is the time complexity of push and pop operations in a stack (in the average case)?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation: "Push and pop operations in a stack take constant time, i.e., O(1), as they only involve adding or removing the top element.",
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
