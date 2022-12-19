import React from "react";
import { useState, useEffect } from 'react';
import { getRandomTrivia } from "../services/TriviaServices";


const Trivia = () => {

    const [randomTrivia, setRandomTrivia] = useState (null)
    const [score, setScore]= useState (0)
    const [randomTriviaSecondState, setRandomTriviaSecondState] = useState(null)

    useEffect(() => {
        getRandomTrivia()
            .then(info => setRandomTrivia(info));
            
    }, []);

    const handleClick = () => {
        setRandomTriviaSecondState(randomTrivia)
        getRandomTrivia()
        .then(info => setRandomTrivia(info));
    }



    return(

        <>
        <h2>The Element_Able Trivia Questions!</h2>
        <button onClick={handleClick}>Get Started!!!</button> 
        
        <h3>{randomTrivia && randomTrivia.question}</h3>
        <h4>Choose your Answer</h4>
  
       
  
  
      </>

)};
    



export default Trivia;