import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
// import { Form } from 'react-bootstrap'
// import { FormControl } from 'react-bootstrap'
// import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import './App.css'
import HomePage from './components/HomePage.js'
import UserPage from './components/UserPage.js'
import SneakerPage from './components/SneakerPage.js'


const StyledLink = styled(Link)`
margin: 0 auto;
color: black;
color: black;
font-size: 20px;
`;

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Navbar bg='light' expand="lg">
            <Navbar.Brand href='/'>
              <img
                alt=''
                src='https://unixtitan.net/images/converse-clipart-shoe-jordan-3.png'
                width='45'
                height='35'
                className='d-inline-block align-top'
              />
              Sneaker Colle¢t
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

            <Nav className='mr-auto'>

            <Nav.Link>
              <StyledLink to='/' style={{ marginLeft: '160px' }}>Home</StyledLink>
              </Nav.Link>

              <Nav.Link>
             <StyledLink to='/user' style={{ marginLeft: '160px' }}>Users</StyledLink>
             </Nav.Link>

             <Nav.Link>
              <StyledLink to='/#about' style={{ marginLeft: '160px' }}>About</StyledLink>
              </Nav.Link>
            </Nav>
            </Navbar.Collapse>
            {/* <Form inline>
              <FormControl
                type='text'
                placeholder='Search'
                className='mr-sm-2'
              />
              <Button variant='outline-info'>Search</Button>
            </Form> */}
          </Navbar>
          <br />      
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
