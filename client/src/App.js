import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Welcome from "./pages/welcome";
import NavBar from "./components/NavBar";


const App = () => {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </Router>
  )
}

export default App;
