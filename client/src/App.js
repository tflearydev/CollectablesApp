import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
// import { Container } from 'react-bootstrap';

import './App.css'
import HomePage from './components/HomePage.js'
import UserPage from './components/UserPage.js'
import SneakerPage from './components/SneakerPage.js'
// import Header from './components/Navbar.js'
// import { Navbar, Nav, NavItem } from 'react-bootstrap'

// import styled from 'styled-components'
// remember styled at bottom, check 'diff' way to do it

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Navbar bg='light' variant='light'>
            <Navbar.Brand href='#home'>
              <img
                alt=''
                src='https://unixtitan.net/images/converse-clipart-shoe-jordan-3.png'
                width='45'
                height='35'
                className='d-inline-block align-top'
              />
              Sneaker Colle¢t
            </Navbar.Brand>
            <Nav className='mr-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/user'>Users</Nav.Link>
              <Nav.Link href='/#about'>About</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type='text'
                placeholder='Search'
                className='mr-sm-2'
              />
              <Button variant='outline-info'>Search</Button>
            </Form>
          </Navbar>

          <br />

          {/* <Header className='Header'/> */}
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/user' component={UserPage} />
            <Route exact path='/user/:userId' component={SneakerPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
