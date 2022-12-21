import React from "react";
import { Link } from "react-router-dom";
import QuizComponent from "../components/StateQuiz";

const QuizContainer = ({allElements}) => (
    <>
    <h2>Test Your Knowlegdge on the Periodic Table </h2>
        <Link to={`/quiz/state`}>Take the atomic state test</Link> <br></br>
        <Link to={`/quiz/trivia`}>Take the Trivia test</Link>
    </>
);

export default QuizContainer;