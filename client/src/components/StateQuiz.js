import React, { useEffect, useState } from "react";

import HighscoresComponent from "./HighscoresComponent";

const QUIZ_LENGTH = 10;

const QuizComponent = ({ allElements }) => {
  const [randomItem, updateRandomItem] = useState(null);
  const [score, updateScore] = useState(0)
  const [points, setPoints] = useState(1);
  const [answer, updateAnswer] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(0);
  const [displayHighscore, setDisplayHighscore] = useState(false);

  function startQuiz() {
    nextQuestion();
    updateScore(0);
    setPoints(1);
    setQuestionNumber(1);
    setDisplayHighscore(false);
  }

  function nextQuestion() {
    const randomindex = Math.floor(Math.random() * allElements.length);
    const newRandomItem = allElements[randomindex]
    updateRandomItem(newRandomItem)
    updateAnswer(null)
    setQuestionNumber(questionNumber + 1);
  }

  const addPoints = (() => {
    const newScore = score + points
    setPoints(points + 1);
    updateScore(newScore)
  })

  const handleAnswer = ((value) => {
    const correctAnswer = randomItem.standardState || 'unknown';
    if (value.target.value === correctAnswer) {
      addPoints();
      updateAnswer(`correct`)
    }
    else {
      setPoints(1);
      updateAnswer(`wrong`)
    }
  })

  const finishQuiz = () => {
    setDisplayHighscore(true);
  };

  const NextQuestion = () => {
    if (questionNumber === QUIZ_LENGTH) {
      return <button onClick={finishQuiz}>Finish Quiz</button>
    } else {
      return <button onClick={nextQuestion}> Next Question </button>
    }
  };

  const CorrectAnswer = () => (
    <div id="correct" >
      <h3>That was correct!</h3>
      <p>{`${randomItem.name} is a ${randomItem.standardState}`}</p>
      <NextQuestion />
    </div>
  )
  const IncorrectAnswer = () => (
    <div id="incorrect" >
      <h3>That was wrong!</h3>
      <p>{`${randomItem.name} is a ${randomItem.standardState}`}</p>
      <NextQuestion />
    </div>
  )

  const ShowQuestion = () => (
    <div id="question">
      { questionNumber === QUIZ_LENGTH ?
        <h3>Last question...</h3> :
        <h3>Question {questionNumber} of {QUIZ_LENGTH}</h3> }
      <p>For {points} {points === 1 ? 'point' : 'points'}</p>
      <p>What is the standard state of <span>{randomItem.name}</span>?</p>
      <button value={"solid"} onClick={handleAnswer}>Solid</button>
      <button value={"gas"} onClick={handleAnswer}>Gas</button>
      <button value={"liquid"} onClick={handleAnswer}>Liquid</button>
      <button value={"state unknown"} onClick={handleAnswer}>State Unknown</button>
    </div>
  )

  return (

    <>
      <h2>The Element_Able Quiz!</h2>
      <p>Rules: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem impedit distinctio autem officiis voluptatem itaque. Officiis quo maiores deleniti voluptatibus aliquid, tempora cum porro error, suscipit illum sed aspernatur atque?</p>
      <button onClick={startQuiz}>Get Started!!!</button>
      {displayHighscore ? <HighscoresComponent game="state" newHighscore={score} /> :
       answer ?
        (answer === "correct" ? <CorrectAnswer /> : <IncorrectAnswer />) :
        (randomItem ? <ShowQuestion /> : null)}
      { questionNumber === 0 ? null :
        <h4>Your Score : {score}</h4> }
    </>
  );
}

export default QuizComponent;
