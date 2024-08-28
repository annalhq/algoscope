// src/App.js
import React from "react";
import Quiz from "./quiz";

const sampleQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
    explanation: "Paris is the capital and most populous city of France.",
  },
  {
    question: "Which is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Jupiter",
    explanation: "Jupiter is the largest planet in the solar system.",
  },
];

function App() {
  return (
    <div className="App">
      <Quiz questions={sampleQuestions} />
    </div>
  );
}

export default App;
