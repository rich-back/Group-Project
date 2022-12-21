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
            .then(info => setRandomTrivia(info));
            
    }, []);

    const handleClick = () => {
        setAnswers(randomTrivia[0].answers)
        setRandomTrivia2(randomTrivia)
        getRandomTrivia().then(info => setRandomTrivia(info));
    };

    const handleAnswerSelect = (event)=>{
        console.log(event.target.value)
        setSelectedAnswer(event.target.value)
    };

    const handleClick2 = (event)=>{
        event.preventDefault()
        questionAnswered();
        handleClick();
    };

    const questionAnswered = ()=>{
        if (answers.value){ 
            setResult(`Correct, the answer to ${randomTrivia2.question} is ${randomTrivia2.answers}`)
        }
        else {setResult(`False, the answer to ${randomTrivia2} is ${randomTrivia2.answers}`)}   
    };

    const triviaItems = answers.map((answer, key)=>{
        return(
        <li key = {key}>
         <input id={key} type="radio"  name="answerSelect" value={answer.text} onChange={handleAnswerSelect} /> 
         <label htmlFor={key}>Answer: {key+1}: {answer.text}</label>
        </li>)
    });

    return(
        <main>
        <h2>The Element_Able Trivia Questions!</h2>

        {answers.length ===0 ?<button onClick={handleClick}>Get Started!!!</button>: 

     
        <div>
            <p>this is the random trivia state {JSON.stringify(randomTrivia)}</p>
            <p>this is the random trivia 2 state {JSON.stringify(randomTrivia2)}</p>
            <p>this is the answers state {JSON.stringify(answers)}</p>
            <p>this is the selected answer state {JSON.stringify(selectedAnswer)}</p>
          
            <form>
                {triviaItems}
                <input type="submit" value="Save Item" className={"button"} onClick={handleClick2}/> 
            </form>


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