"use client"
import React, { useState } from "react";


function Quiz({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: option,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateScore();
      setQuizComplete(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setScore(0);
    setQuizComplete(false);
  };

  return (
    <div className="p-6 max-w-full mx-auto mt-10 border border-gray-200 rounded-lg shadow-md">
      {quizComplete ? (
        <div>
          <h2 className="text-xl font-bold mb-4">
            Quiz Complete! Your score is {score}/{questions.length} (
            {((score / questions.length) * 100).toFixed(2)}% accuracy)
          </h2>
          <button
            onClick={resetQuiz}
            className="bg-blue-500 text-white py-2 px-4 rounded mb-6"
          >
            Retry Quiz
          </button>
          <div>
            {questions.map((q, index) => {
              const userAnswer = selectedAnswers[index];
              return (
                <div key={index} className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Question {index + 1}: {q.question}
                  </h3>
                  <div className="space-y-2">
                    {q.options.map((option, i) => {
                      let optionStyle = "py-2 px-4 border rounded w-full";
                      if (userAnswer === option) {
                        optionStyle += userAnswer === q.correctAnswer ? " bg-green-100" : " bg-red-100";
                      } else if (option === q.correctAnswer) {
                        optionStyle += " bg-green-100";
                      } else {
                        optionStyle += " bg-gray-200";
                      }
                      return (
                        <div key={i} className={optionStyle}>
                          {option}
                        </div>
                      );
                    })}
                  </div>
                  {q.explanation && <p className="mt-2 text-gray-600">{q.explanation}</p>}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">
              Question {currentQuestionIndex + 1} of {questions.length}
            </h2>
            <p>
              {Object.keys(selectedAnswers).length}/{questions.length}{" "}
              Attempted
            </p>
          </div>
          <div>
            <p className="mb-4">{questions[currentQuestionIndex].question}</p>
            <div className="space-y-2">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={`block w-full py-2 px-4 border rounded ${
                    selectedAnswers[currentQuestionIndex] === option
                      ? "bg-blue-100 border-blue-500"
                      : "bg-white border-gray-300"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <button
              onClick={handlePrev}
              className="bg-gray-500 text-white py-2 px-4 rounded disabled:opacity-50"
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              {currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
