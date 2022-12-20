import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HighscoresComponent from "../components/HighscoresComponent";


const Welcome = () => (
  <div>
    <a href="/quiz"><button>Test Your Knowledge!</button></a>
    <h4>Welcome</h4>
    <p>Welcome to Element_Able - Your guide to the Period Table</p>

    <section>
      <h4>This month's high scores</h4>
      <HighscoresComponent game="trivia"/>
    </section>
  </div>
);

export default Welcome;
