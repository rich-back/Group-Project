import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HighscoresComponent from "../components/HighscoresComponent";


const Welcome = () => (
  <main className="welcome-page">
    <article>
      <h2>Welcome</h2>

      {/* <a href="/quiz"><button>Test Your Knowledge!</button></a> */}
      <p>Welcome to Element_Able - Your guide to the Period Table</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, explicabo. Eos consequatur optio necessitatibus, voluptatem cupiditate quae eveniet eius fuga esse cum ipsa numquam repellat, dignissimos labore. Eligendi, debitis unde!</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque molestiae odio possimus laboriosam nesciunt consectetur. Accusamus mollitia vel nulla illo distinctio. Eveniet inventore, praesentium blanditiis animi voluptate possimus delectus? Exercitationem.</p>
    </article>

    <aside className="boxed-aside">
      <h3>This month's high scores</h3>
      <HighscoresComponent game="state"/>
    </aside>
  </main>
);

export default Welcome;
