import React from "react";
import { useState, useEffect } from 'react';
import { getRandomTrivia } from "../services/TriviaServices";

const Trivia = () => {

    const [randomTrivia, setRandomTrivia] = useState (null)
    const [randomTrivia2, setRandomTrivia2] = useState (null)
    const [answers, setAnswers] = useState([])
    const [selectedAnswer, setSelectedAnswer] =useState([])
    const [result, setResult]=useState([])
    const [score, setScore]= useState (0)
   

    useEffect(() => {
        getRandomTrivia()
            .then(info => setRandomTrivia(info[0]));
            
    }, []);

    const handleClick = () => {
        setAnswers(randomTrivia.answers)
        
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
    };

    const answersToFilter = answers
    
    const filterRightAnswer = answersToFilter.filter((answer, index) => (answer.value === true));
    
   


    const questionAnswered = ()=>{
        if (randomTrivia2.answers[selectedAnswer].value){ 
            setResult(`Correct, the answer to ${randomTrivia2.question} is ${randomTrivia2.answers[selectedAnswer].text}`)
        }
        else {setResult(`False, the answer to ${randomTrivia2.question} is ${filterRightAnswer[0].text}`)}   
    };

    const triviaItems = answers.map((answer, key)=>{
        return(
        <li key = {key}>
         <input id={key} type="radio"  name="answerSelect" value={key} onChange={handleAnswerSelect} /> 
         <label htmlFor={key}>Answer: {key+1}: {answer.text}</label>
        </li>)
    });

    return(
        <main>
        <h2>The Element_Able Trivia Questions!</h2>

        {answers.length ===0 ?<button onClick={handleClick}>Get Started!!!</button>: 

     
        <div>
            {/* <p>this is the random trivia state {JSON.stringify(randomTrivia)}</p>
            <p>this is the random trivia 2 state {JSON.stringify(randomTrivia2)}</p>
            <p>this is the answers state {JSON.stringify(answers)}</p>
            <p>this is the selected answer state {JSON.stringify(selectedAnswer)}</p> */}
          
            <form>
                {randomTrivia2.question}
                {triviaItems}
                <input type="submit" value="Submit Answer" className={"button"} onClick={handleClick2}/> 
            </form>

            <p>{result}</p>


         </div>}

        </main>   


)};

export default Trivia;

// {/* <input id="high" type="radio" checked={priority === "high"}name="prioritySelect" value="high" onChange={handlePrioritySelect} />
//         <label htmlFor="low">Low</label>
//         <input id="low" type="radio" name="prioritySelect" value="low" onChange={handlePrioritySelect} checked={priority === "low"}/> 
//         <input type="submit" value="Save Item" className={"button"}/> */}

        // checked={ answer === {answer.value}}
       
        // randomAnswers.map((answer, index)=>{
        //     <li><input type = "radio" id = {index} "answer" name= "answers" /></li>
        // }


        
        
        
//         {/* <input  type= "radio"} id= {""} name ="ansers" value={} onClick={handleAnswer}>Solid</button> */}
             
         

// {/* <input type="radio" id="html" name="fav_language" value="HTML">
// <label for="html">HTML</label><br>
// <input type="radio" id="css" name="fav_language" value="CSS">
// <label for="css">CSS</label><br>
// <input type="radio" id="javascript" name="fav_language" value="JavaScript">
// <label for="javascript">JavaScript</label> */}