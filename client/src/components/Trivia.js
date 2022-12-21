import React from "react";
import { useState, useEffect } from 'react';
import { getRandomTrivia } from "../services/TriviaServices";
import HighscoresComponent from "./HighscoresComponent";

const Trivia = () => {

    const [randomTrivia, setRandomTrivia] = useState (null)
    const [randomTrivia2, setRandomTrivia2] = useState (null)
    const [answers, setAnswers] = useState([])
    const [selectedAnswer, setSelectedAnswer] =useState(null)
    const [result, setResult]=useState(null)
    const [score, setScore]= useState (0)
    const [questionNumber, setQuestionNumber]= useState(1)
    const [quizFinished, setQuizFinished] = useState(false)

    
   

    useEffect(() => {
        getRandomTrivia()
            .then(info => setRandomTrivia(info[0]));
            
    }, []);

    const handleClick = () => {

        setAnswers(shuffleAnswers([...randomTrivia.answers]))
        
        setRandomTrivia2(randomTrivia)
        getRandomTrivia().then(info => setRandomTrivia(info[0]));
    };

    const handleAnswerSelect = (event)=>{
        setSelectedAnswer(event.target.value)
    };

    const handleClick2 = (event)=>{
        event.preventDefault()
        questionAnswered();
        handleClick();
        setSelectedAnswer(null)
    };

    const addScore = ()=>{
        let newScore = score
        newScore +=1
        setScore(newScore)
    };

    const shuffleAnswers = (array)=>{
        const randomAnswerArray = []
        let runningNumber = array.length
        
        while (runningNumber>0){
            const randomIndex = Math.floor(Math.random() * (runningNumber));
            const newRandomItem = array[randomIndex];
    
            randomAnswerArray.push(newRandomItem);
            array.splice(randomIndex, 1);
            runningNumber-=1
           
            };
            return(randomAnswerArray)
    };

    const answersToFilter = answers
    
    const filterRightAnswer = answersToFilter.filter((answer, index) => (answer.value === true));
    
   


    const questionAnswered = ()=>{
        setQuestionNumber(questionNumber+1)
        if (answers[selectedAnswer].value){ 
            addScore()
            setResult(<div id = "correct"><h3>Correct, the answer to: </h3>{randomTrivia2.question} <br></br>
            is: <br></br>{answers[selectedAnswer].text}</div>)
        }
        else {setResult(<div id = "incorrect"><h3>False, the answer to: </h3>{randomTrivia2.question} <br></br>is <br></br>{filterRightAnswer[0].text}</div>)};
        if (questionNumber === 10){
            setQuizFinished(true)

        }
    };

    const triviaItems = answers.map((answer, key)=>{
        return(
        <li key = {key}>
         <input id={key} checked= {selectedAnswer==key}type="radio"  name="answerSelect" value={key} onChange={handleAnswerSelect} /> 
         <label htmlFor={key}>Answer: {key+1}: {answer.text}</label>
        </li>)
    });

    return(
        <main>
        <h2>The Element_Able Trivia Questions!</h2>

        {answers.length ===0 ?<button onClick={handleClick}>Get Started!!!</button>: 
         
         quizFinished ? 

         <div id = "quizContainer">{result} <br></br><HighscoresComponent game="trivia" newHighscore={score} /></div>:
         

     
        <div id = "quizContainer">
            <img src= "https://www.pta.co.uk/pta/media/169-quiz-step-by-step.jpg" alt= "question mark" id = "trivia-img"></img>
          
            <form>
                <h3>{randomTrivia2.question}</h3>
                <ul>
                {triviaItems}
                </ul>
                <input type="submit" value="Submit Answer" className={"button"} onClick={handleClick2}/> 
            

            <div>{result} </div>
            </form>
            <aside><h4>Your current score is:</h4> <p id = "score">{score}</p></aside>


         </div>}

        </main>   


)};

export default Trivia;



        
        
        
