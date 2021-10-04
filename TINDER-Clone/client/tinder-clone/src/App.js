import React from "react";

import Header from "./components/Header.js";
import TinderCards from "./components/TinderCards.js";
import SwipeButtons from "./components/SwipeButtons.js";


import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
