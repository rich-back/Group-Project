import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Welcome from "./pages/Welcome";
import NavBar from "./components/NavBar";
import PTable from "./pages/PTable";
import { getElements } from "./services/ElementsService";
import Quiz from "./pages/Quiz";
import SElementPage from "./pages/SElementPage";

const App = () => {

  const [allElements, setAllElements] = useState([]);

  useEffect(() => {
    getElements()
      .then(elements => setAllElements(elements));
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/periodictable" element ={<PTable allElements={allElements} />} />
        <Route path="/quiz" element ={<Quiz />} />
        {/* <Route path="/periodictable/element/:id" element ={< SElemtentPage allElements={allElements}/>} /> */}
        <Route path="/element/:name" element ={< SElementPage allElements={allElements}/>} />

      </Routes>
    </Router>
  )
}

export default App;
