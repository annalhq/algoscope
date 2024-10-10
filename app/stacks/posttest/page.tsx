import React from 'react';
import Quiz from '@/quiz/quiz';

const sampleQuestions = [
  {
    question: "Which of the following applications does NOT typically involve the use of stacks?",
    options: ["Recursive function calls", "Undo operations in text editors", "Job scheduling", "Evaluating expressions"],
    correctAnswer: "Job scheduling",
    explanation: "Stacks are used for function calls, undo operations, and expression evaluation, but job scheduling is usually handled by queues.",
  },
  {
    question: "What will happen if you attempt to pop an element from an empty stack?",
    options: ["Underflow", "Overflow", "Segmentation fault", "Nothing"],
    correctAnswer: "Underflow",
    explanation: "Underflow occurs when trying to pop an element from an empty stack, as there are no elements to remove.",
  },
  {
    question: "Which of the following is true for stack operations in terms of time complexity?",
    options: ["Push and pop take O(1) time", "Push takes O(1) but pop takes O(n) time", "Both push and pop take O(n) time", "Pop takes O(1) but push takes O(n) time"],
    correctAnswer: "Push and pop take O(1) time",
    explanation: "Both push and pop operations in a stack have constant time complexity, O(1), since they involve adding or removing the top element.",
  },
  {
    question: "Which data structure is typically used to implement the function call stack in most programming languages?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correctAnswer: "Stack",
    explanation: "Function calls in most programming languages are managed using a stack, allowing for proper handling of recursion and local variables.",
  },
  {
    question: "What is the most common way of implementing a stack?",
    options: ["Using an array", "Using a linked list", "Using a queue", "Both array and linked list"],
    correctAnswer: "Both array and linked list",
    explanation: "Stacks can be implemented using both arrays and linked lists, with different trade-offs in terms of memory and performance.",
  },
  {
    question: "When using a stack to evaluate the expression (3 + (4 * 5)), what will be the result after evaluation?",
    options: ["23", "27", "17", "35"],
    correctAnswer: "23",
    explanation: "Stacks can be used to evaluate arithmetic expressions using operators and operands. The expression (4 * 5) evaluates to 20, and adding 3 gives 23.",
  },
];

const postTestPage = () => {
  return (
    <div>
      <Quiz questions={sampleQuestions} />
    </div>
  );
};

export default postTestPage;
