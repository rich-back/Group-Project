import React from "react";
import { Link } from "react-router-dom";
import QuizComponent from "../components/StateQuiz";
import HighscoresComponent from "../components/HighscoresComponent";

const QuizContainer = ({ allElements }) => (

  <main className="main-content">
    <article className = "quiz-home">
      <h2>Test Your Knowlegdge on the Periodic Table </h2>
      <Link to={`/quiz/state`}>Take the atomic state test</Link> <br></br>
      <Link to={`/quiz/trivia`}>Take the Trivia test</Link>
    </article>
    <aside className="boxed-aside">
      <h3>This month's high scores</h3>
      <HighscoresComponent game="state" />
    </aside>
    </main>
    );

    export default QuizContainer;