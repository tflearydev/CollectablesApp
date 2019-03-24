import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import axios from "axios";
import './App.css';
// import Navbar from "./components/Navbar"; plan to make a navbar
// import HomePage from './components/HomePage.js'
// import UserPage from './components/UserPage.js'
// import SneakerPage from './components/SneakerPage.js'

// import styled from 'styled-components'
// remember styled at bottom, check 'diff' way to do it

class App extends Component {
  render() {
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
        </header>
      </div>
    );
  }
}

export default App;
