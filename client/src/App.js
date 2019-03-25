import React, { Component } from 'react'
import './App.css'
import NavBar from './components/NavBar.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import axios from "axios";
// here I was going to import some data but not sure yet


import HomePage from './components/HomePage.js'
import UserPage from './components/UserPage.js'
import SneakerPage from './components/SneakerPage.js'

// import styled from 'styled-components'
// remember styled at bottom, check 'diff' way to do it

class App extends Component {
  render () {
    return (
      <Router>
        {/* <div className='App'> */}
          <NavBar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/user' component={UserPage} />
            <Route path='/user/:userId' component={SneakerPage} />
          </Switch>
        {/* </div> */}
      </Router>
    )
  }
}

export default App
