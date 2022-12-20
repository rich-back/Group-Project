import React from "react";
import { useState, useEffect } from 'react';
import { getRandomTrivia } from "../services/TriviaServices";


const Trivia = () => {

    const [randomTrivia, setRandomTrivia] = useState (null)
    const [randomTrivia2, setRandomTrivia2] = useState (null)
    const [randomAnswers, setRandomAnswers] = useState (null)
    const [score, setScore]= useState (0)
   

    useEffect(() => {
        getRandomTrivia()
            .then(info => setRandomTrivia(info));
            
    }, []);

    //mak an array out of all the answers

    const answersArray = randomTrivia.map(trivia => randomTrivia.incorrectAnswers).push(randomTrivia.correctAnswer)
    

//function to randomise array
    function randomiseAnswers(array) {
        const randomAnswerArray = []
        let runningIndex = array.length
        while (runningIndex> 0){
            const randomindex = Math.floor(Math.random() * array.length);
            const newRandomItem = answersArray[randomindex];
            randomAnswerArray.push(newRandomItem);
            runningIndex -=1;
        }
        return randomAnswerArray
    }

    const handleClick = () => {
        setRandomTrivia2(randomTrivia)
        setRandomAnswers(randomiseAnswers(randomTrivia))
        getRandomTrivia()
        .then(info => setRandomTrivia(info));
    }



    return(

        <>
        <h2>The Element_Able Trivia Questions!</h2>

        {!randomAnswers ?<button onClick={handleClick}>Get Started!!!</button> : for 

        <form>
              <button value={} onClick={handleAnswer}>Solid</button>
              <button value={"gas"} onClick={handleAnswer}>Gas</button>
              <button value={"liquid"} onClick={handleAnswer}>Liquid</button></form>
         }


        
        <h3>{randomTrivia.question}</h3>
        <h4>Choose your Answer</h4>
  
      </>

)};
    



export default Trivia;