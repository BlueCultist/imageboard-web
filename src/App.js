import React from "react";
import axios from "./utils/axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  async function getFacts() {
    try {
      const response = await axios.get(`/api/breeds/image/random`);
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p onClick={getFacts}>Click to get stuff</p>
      </header>
    </div>
  );
}

export default App;
