import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
// import { Container } from 'react-bootstrap';

import './App.css'
import HomePage from './components/HomePage.js'
import UserPage from './components/UserPage.js'
import SneakerPage from './components/SneakerPage.js'
// import Header from './components/Navbar.js'
// import { Navbar, Nav, NavItem } from 'react-bootstrap'

// import styled from 'styled-components'
// remember styled at bottom, check 'diff' way to do it


const StyledLink = styled(Link)`
margin: 0 auto;
color: black;
/* border: 2px solid black;
border-radius: 10px; */
color: black;
font-size: 20px;
/* height: 20px;
width: 50px; */
`;

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
            <Nav.Link>
              <StyledLink to='/' style={{ marginLeft: '20px' }}>Home</StyledLink>
             <StyledLink to='/user' style={{ marginLeft: '20px' }}>Users</StyledLink>
              <StyledLink to='/#about' style={{ marginLeft: '20px' }}>About</StyledLink>
              </Nav.Link>
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
