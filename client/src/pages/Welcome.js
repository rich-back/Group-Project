import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Welcome = () => (
  <div>
    <a href="/quiz"><button>Test Your Knowledge!</button></a>
    <h4>Welcome</h4>
    <p>Welcome to Element_Able - Your guide to the Period Table</p>
  </div>
);

export default Welcome;
