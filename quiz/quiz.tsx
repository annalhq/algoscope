"use client"
import React, { useState, useEffect, useCallback } from "react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { antiCheatingMechanism } from './antiCheating';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

interface QuizProps {
  questions: QuizQuestion[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(600); // 10 minutes in seconds
  const [quizStartTime, setQuizStartTime] = useState<number | null>(null);
  const [showCopyWarning, setShowCopyWarning] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [questionStartTimes, setQuestionStartTimes] = useState<number[]>([]);

  const shuffleQuestions = useCallback(() => {
    return [...questions]
      .sort(() => Math.random() - 0.5)
      .map(q => ({
        ...q,
        options: [...q.options].sort(() => Math.random() - 0.5)
      }));
  }, [questions]);

  useEffect(() => {
    const shuffled = shuffleQuestions();
    setShuffledQuestions(shuffled);
  }, [shuffleQuestions]);

  useEffect(() => {
    if (!showInstructions && !quizComplete) {
      antiCheatingMechanism.activate();
      setQuizStartTime(Date.now());
      setQuestionStartTimes([Date.now()]);
    }
    return () => {
      if (!showInstructions && !quizComplete) {
        antiCheatingMechanism.deactivate();
      }
    };
  }, [showInstructions, quizComplete]);

  useEffect(() => {
    if (timeRemaining > 0 && !quizComplete && !showInstructions) {
      const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0 && !quizComplete) {
      handleSubmit();
    }
  }, [timeRemaining, quizComplete, showInstructions]);

  const handleOptionClick = (option: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: option,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setQuestionStartTimes(prev => [...prev, Date.now()]);
    } else {
      handleSubmit();
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const jumpToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const handleSubmit = () => {
    calculateScore();
    setQuizComplete(true);
    antiCheatingMechanism.deactivate();
  };

  const calculateScore = () => {
    let correctCount = 0;
    shuffledQuestions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
  };

  const resetQuiz = () => {
    const shuffled = shuffleQuestions();
    setShuffledQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setScore(0);
    setQuizComplete(false);
    setTimeRemaining(600);
    setQuizStartTime(null);
    setShowInstructions(true);
    antiCheatingMechanism.clearCheatAttempts();
    setQuestionStartTimes([]);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const calculateTimeTaken = () => {
    const endTime = Date.now();
    const timeTaken = Math.floor(((endTime - (quizStartTime || 0)) / 1000)); // in seconds
    return formatTime(timeTaken);
  };

  const getTimePerQuestion = () => {
    const endTimes = [...questionStartTimes.slice(1), Date.now()];
    return shuffledQuestions.map((_, index) => ({
      question: `Q${index + 1}`,
      time: Math.round((endTimes[index] - questionStartTimes[index]) / 1000)
    }));
  };

  if (showInstructions) {
    return (
      <div className="p-6 max-w-full mx-auto mt-10 border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Quiz Instructions</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>You have 10 minutes to complete the quiz.</li>
          <li>There are {shuffledQuestions.length} questions in total.</li>
          <li>You can navigate between questions using the Previous and Next buttons.</li>
          <li>The quiz will be in fullscreen mode. Do not exit fullscreen or switch tabs.</li>
          <li>Copying content or using keyboard shortcuts is not allowed.</li>
          <li>Any suspicious activity will be logged and may result in disqualification.</li>
        </ul>
        <button
          onClick={() => {
            setShowInstructions(false);
            if (document.documentElement.requestFullscreen) {
              document.documentElement.requestFullscreen();
            }
          }}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Start Quiz
        </button>
      </div>
    );
  }

  if (shuffledQuestions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 max-w-full mx-auto mt-10 border border-gray-200 rounded-lg shadow-md">
      {showCopyWarning && (
        <Alert className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            Copying content is not allowed during the quiz.
          </AlertDescription>
        </Alert>
      )}

      {!quizComplete && (
        <div className="mb-4 flex justify-between items-center">
          <div className="text-lg font-semibold">Time Remaining: {formatTime(timeRemaining)}</div>
        </div>
      )}
      
      {quizComplete ? (
        <div>
          <Alert>
            <AlertTitle>Quiz Complete!</AlertTitle>
            <AlertDescription>
              Your score is {score}/{shuffledQuestions.length} ({((score / shuffledQuestions.length) * 100).toFixed(2)}% accuracy)
              <br />
              Time taken: {calculateTimeTaken()}
              {antiCheatingMechanism.getCheatAttempts().length > 0 && (
                <p className="text-red-500 mt-2">
                  <AlertCircle className="inline mr-2" size={18} />
                  Suspicious activity detected: {antiCheatingMechanism.getCheatAttempts().length} attempts
                </p>
              )}
            </AlertDescription>
          </Alert>
          <div className="mt-6 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={getTimePerQuestion()}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="question" />
                <YAxis label={{ value: 'Time (seconds)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Line type="monotone" dataKey="time" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <button
            onClick={resetQuiz}
            className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600"
          >
            Retry Quiz
          </button>
          <div className="mt-6">
            {shuffledQuestions.map((q, index) => {
              const userAnswer = selectedAnswers[index];
              return (
                <div key={index} className="mb-6 p-4 border rounded">
                  <h3 className="text-lg font-semibold mb-2">
                    Question {index + 1}: {q.question}
                  </h3>
                  <div className="space-y-2">
                    {q.options.map((option, i) => {
                      let optionStyle = "py-2 px-4 border rounded w-full";
                      if (userAnswer === option) {
                        optionStyle += userAnswer === q.correctAnswer ? " bg-green-100 border-green-500" : " bg-red-100 border-red-500";
                      } else if (option === q.correctAnswer) {
                        optionStyle += " bg-green-100 border-green-500";
                      }
                      return (
                        <div key={i} className={optionStyle}>
                          {option}
                        </div>
                      );
                    })}
                  </div>
                  {q.explanation && (
                    <p className="mt-2 text-gray-600 bg-gray-100 p-2 rounded">
                      <strong>Explanation:</strong> {q.explanation}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">
              Question {currentQuestionIndex + 1} of {shuffledQuestions.length}
            </h2>
            <p>
              {Object.keys(selectedAnswers).length}/{shuffledQuestions.length} Attempted
            </p>
          </div>
          <div>
            <p className="mb-4 text-lg">{shuffledQuestions[currentQuestionIndex].question}</p>
            <div className="space-y-2">
              {shuffledQuestions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={`block w-full py-2 px-4 border rounded ${
                    selectedAnswers[currentQuestionIndex] === option
                      ? "bg-blue-100 border-blue-500"
                      : "bg-white border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={handlePrev}
              className="bg-gray-500 text-white py-2 px-4 rounded disabled:opacity-50 hover:bg-gray-600"
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <div className="flex space-x-2">
              {shuffledQuestions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => jumpToQuestion(index)}
                  className={`w-8 h-8 rounded-full ${
                    currentQuestionIndex === index
                      ? "bg-blue-500 text-white"
                      : selectedAnswers[index]
                      ? "bg-green-200"
                      : "bg-gray-200"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button
              onClick={handleNext}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              {currentQuestionIndex === shuffledQuestions.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;