/* eslint-disable import/no-webpack-loader-syntax */
import React, { useEffect, useState } from "react";
import testtubePic1 from "!file-loader!../static/Testtube1.svg";
import testtubePic2 from "!file-loader!../static/Testtube2.svg";
import testtubePic3 from "!file-loader!../static/Testtube3.svg";
import testtubePic4 from "!file-loader!../static/Testtube4.svg";
import testtubePic5 from "!file-loader!../static/Testtube5.svg";
import testtubePic6 from "!file-loader!../static/Testtube6.svg";
import testtubePic7 from "!file-loader!../static/Testtube7.svg";
import testtubePic8 from "!file-loader!../static/Testtube8.svg";
import testtubePic9 from "!file-loader!../static/Testtube9.svg";
import testtubePic10 from "!file-loader!../static/Testtube10.svg";
import testtubePic11 from "!file-loader!../static/Testtube11.svg";

import { fireConfetti } from "./confetti";

import HighscoresComponent from "./HighscoresComponent";

const QUIZ_LENGTH = 10;

const QuizComponent = ({ allElements }) => {
  const [randomItem, updateRandomItem] = useState(null);
  const [score, updateScore] = useState(0)
  const [points, setPoints] = useState(1);
  const [answer, updateAnswer] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(0);
  const [displayHighscore, setDisplayHighscore] = useState(false);
  const [imageToShow, updateImageToShow] = useState(testtubePic1)

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
    fireConfetti();
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
      {questionNumber === QUIZ_LENGTH ?
        <h3>Last question...</h3> :
        <h3>Question {questionNumber} of {QUIZ_LENGTH}</h3>}
      <p>For {points} {points === 1 ? 'point' : 'points'}</p>
      <p>What is the standard state of <span>{randomItem.name}</span>?</p>
      <button value={"solid"} onClick={handleAnswer}>Solid</button>
      <button value={"gas"} onClick={handleAnswer}>Gas</button>
      <button value={"liquid"} onClick={handleAnswer}>Liquid</button>
      <button value={"state unknown"} onClick={handleAnswer}>State Unknown</button>
    </div>
  )

  const ShowImage = () => {
    const imageArray = [testtubePic1, testtubePic2, testtubePic3, testtubePic4, testtubePic5, testtubePic6, testtubePic7, testtubePic8, testtubePic9, testtubePic10, testtubePic11]
    const imageIndex = (questionNumber - 1)
    const imageToDisplay = imageArray[imageIndex]
    updateImageToShow(imageToDisplay)
    return (displayHighscore ? <img className="testtube" src={testtubePic11} /> :
      <img className="testtube" src={imageToShow} />);
  }

  return (

    <>
      <h2>The Element_Able Quiz!</h2>
      <div className="states-rules">
        <h3>Rules</h3>
        <p>We'll ask you ten questions about ten elements.  You just need to
          pick the right standard state for the element.</p>
        <p>When you answer multiple questions correctly in a row, we'll give
          you bonus points!</p>
        <p>Don't worry about wrong answers; you don't lose any points for them.</p>
        <p>Be in the top 10 scores for this month to add yourself to the high scores leaderboard!</p>
      </div>

      <button onClick={startQuiz}>Get Started!!!</button>
      <div id="quizContainer">
        {questionNumber === 0 ? null :
          <aside>
            <ShowImage />
            <p>{questionNumber}/{QUIZ_LENGTH}</p>
          </aside>
        }
        {displayHighscore ? <HighscoresComponent game="state" newHighscore={score} /> :
          answer ?
            (answer === "correct" ? <CorrectAnswer /> : <IncorrectAnswer />) :
            (randomItem ? <ShowQuestion /> : null)}
        {questionNumber === 0 ? null :
          <h4>Your Score : {score}</h4>}
      </div>
    </>
  );
}

export default QuizComponent;
