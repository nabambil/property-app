import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './components/header.js';
import Home from './components/index.js';
import Comparison from './components/comparison.js';

function App() {
  return (
    <div id="wrapper">
    {/* <div className="App"> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Edit <code>src/App.js</code> and save to reload. </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
      </header> */}
      <Comparison/>
      <Header />
      <Home />
    {/* </div> */}
    </div>
  );
}

export default App;
