import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "../src/pages/homepage/homepage";

const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
);
function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
    </div>
  );
}

export default App;
