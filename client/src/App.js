import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { getElements } from "./services/ElementsService";
import './App.css';

import Welcome from "./pages/Welcome";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PTable from "./pages/PTable";
import Quiz from "./pages/Quiz";
import SElementPage from "./pages/SElementPage";
import HeaderImage from "./components/HeaderImage";
import HeaderPic from "./static/elementablesLogobanner.svg"
import QuizComponent from "./components/StateQuiz";
import Trivia from "./components/Trivia";
import HighscoresPage from "./pages/HighscoresPage";
import TimeLinePage from "./pages/TimeLinePage";

const App = () => {

  const [allElements, setAllElements] = useState([]);

  useEffect(() => {
    getElements()
      .then(elements => setAllElements(elements));
  }, []);

  return (
    <Router>
      <header>
        <HeaderImage HeaderPic={HeaderPic}/>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/periodictable" element ={<PTable allElements={allElements} />} />
        <Route path="/quiz" element ={<Quiz allElements={allElements} />} />
        <Route path="/quiz/state" element ={<main><QuizComponent allElements={allElements} /></main>} />
        <Route path="/quiz/trivia" element ={<main><Trivia allElements={allElements} /></main>} />
        {/* <Route path="/periodictable/element/:id" element ={< SElemtentPage allElements={allElements}/>} /> */}
        <Route path="/element/:name" element ={< SElementPage allElements={allElements}/>} />
        <Route path="/highscores" element={<HighscoresPage/>} />
        <Route path="/timeline" element={<TimeLinePage allElements={allElements}/>} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </Router>
  )
}

export default App;
