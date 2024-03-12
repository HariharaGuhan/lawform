import React, { useState } from "react";

function Dummy() {
  const questions = [
    {
      questionText: " Which of the following is the correct name of React.js?",
      answerOptions: [
        { answerText: "React", isCorrect: false },
        { answerText: "React.js", isCorrect: false },
        { answerText: "ReactJS", isCorrect: false },
        { answerText: "All of the above", isCorrect: true },
      ],
    },
    {
      questionText:
        "Which of the following command is used to install create-react-app?",
      answerOptions: [
        { answerText: "npm install -g create-react-app", isCorrect: true },
        { answerText: "npm install create-react-app", isCorrect: false },
        { answerText: "npm install -f create-react-app", isCorrect: false },
        { answerText: "install -g create-react-app", isCorrect: false },
      ],
    },
    {
      questionText:
        "What of the following is used in React.js to increase performance?",
      answerOptions: [
        { answerText: "Original DOM", isCorrect: false },
        { answerText: "Virtual DOM", isCorrect: true },
        { answerText: "Both A and B", isCorrect: false },
        { answerText: "None of the above", isCorrect: false },
      ],
    },
    {
      questionText:
        "A class is a type of function, but instead of using the keyword function to initiate it, which keyword do we use?",
      answerOptions: [
        { answerText: "Constructor", isCorrect: false },
        { answerText: "Class", isCorrect: true },
        { answerText: "Object", isCorrect: false },
        { answerText: "DataObject", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which of the following acts as the input of a class-based component?",
      answerOptions: [
        { answerText: "Class", isCorrect: false },
        { answerText: "Factory", isCorrect: false },
        { answerText: "Render", isCorrect: false },
        { answerText: "Props", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <h1 className="header">Quiz</h1>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            <div className="head">
              <p>Correct Answer: {}</p>
              <p>Wrong Answers: {}</p>
            </div>
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Questions {currentQuestion + 1}/</span>
                {questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswerButtonClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Dummy;
