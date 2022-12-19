import React, { useEffect, useState } from "react";


const QuizComponent = ({ allElements }) => {
  const [randomItem, updateRandomItem] = useState("Let's Begin")
  const [score, updateScore] = useState(0)
  const [points, setPoints] = useState(1);
  const [answer, updateAnswer] = useState(null)

  function startQuiz() {
    const randomindex = Math.floor(Math.random() * allElements.length);
    const newRandomItem = allElements[randomindex]
    updateRandomItem(newRandomItem)
  }

  function nextQuestion() {
    const randomindex = Math.floor(Math.random() * allElements.length);
    const newRandomItem = allElements[randomindex]
    updateRandomItem(newRandomItem)
    updateAnswer(null)
  }


  const addPoints = (() => {
    const newScore = score + points
    setPoints(points * 2);
    updateScore(newScore)
  })

  const handleAnswer = ((value) => {

    if (value.target.value === randomItem.standardState) {
      addPoints();
      updateAnswer(`correct`)
    }
    else {
      setPoints(1);
      updateAnswer(`wrong`)
    }
  })

  const CorrectAnswer = () => (
    <div id="correct" >
      <h3>That was correct!</h3>
      <p>{`${randomItem.name} is a ${randomItem.standardState}`}</p>
      <button onClick={nextQuestion}> Next Question </button>
    </div>
  )
  const IncorrectAnswer = () => (
    <div id="incorrect" >
      <h3>That was wrong!</h3>
      <p>{`${randomItem.name} is a ${randomItem.standardState}`}</p>
      <button onClick={nextQuestion}> Next Question </button>
    </div>
  )

  const NextQuestion = () => (
    <>
      <h3>{randomItem.name}</h3>
      <button value={"solid"} onClick={handleAnswer}>Solid</button>
      <button value={"gas"} onClick={handleAnswer}>Gas</button>
      <button value={"liquid"} onClick={handleAnswer}>Liquid</button>
      <button value={"state unknown"} onClick={handleAnswer}>State Unknown</button>
    </>
  )

  return (

    <>
      <h2>The Element_Able Quiz!</h2>
      <button onClick={startQuiz}>Get Started!!!</button>
      {answer ? (answer == "correct" ? <CorrectAnswer /> : <IncorrectAnswer />) : <NextQuestion />}
      <h4>Your Score : {score}</h4>
    </>
  );
}

export default QuizComponent;
