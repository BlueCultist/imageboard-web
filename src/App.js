import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import WeatherDisplay from "./Components/weatherDisplay";

let num = 1;

function App() {
  const [word, setWord] = useState("word");

  const clickHandler = text => () => {
    num++;
    setWord(text + " " + num);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p onClick={clickHandler("bouette")}>{word}</p>
      </header>
    </div>
  );
}

export default App;
