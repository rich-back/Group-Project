import React from "react";
import { useState, useEffect } from 'react';
import { getRandomTrivia } from "../services/TriviaServices";

const Trivia = () => {

    const [randomTrivia, setRandomTrivia] = useState (null)
    const [randomTrivia2, setRandomTrivia2] = useState (null)
    const [answers, setAnswers] = useState([])
    const [selectedAnswer, setSelectedAnswer] =useState(null)
    const [result, setResult]=useState(null)
    const [score, setScore]= useState (0)

    
   

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
        if (answers[selectedAnswer].value){ 
            addScore()
            setResult(<p>Correct, the answer to: <br></br>{randomTrivia2.question} <br></br>
            is: <br></br>{answers[selectedAnswer].text}</p>)
        }
        else {setResult(<p>False, the answer to: <br></br>{randomTrivia2.question} <br></br>is <br></br>{filterRightAnswer[0].text}</p>)}   
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

     
        <div>
    
          
            <form>
                {randomTrivia2.question}
                {triviaItems}
                <input type="submit" value="Submit Answer" className={"button"} onClick={handleClick2}/> 
            </form>

            <div>{result} <br></br>You have {score} points</div>


         </div>}

        </main>   


)};

export default Trivia;



        
        
        
