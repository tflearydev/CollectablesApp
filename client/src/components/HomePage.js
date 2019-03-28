import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { Jumbotron } from 'react-bootstrap'
// import { Image } from 'react-bootstrap'
import styled from 'styled-components'

const StyledLink = styled(Link)`
margin: 0 auto;
background: black;
border: 2px solid black;
border-radius: 10px;
color: white;
font-size: 55px;
height: 20px;
width: 50px;
`;

const Jumbotron = styled.div`
  background-image: url('https://static1.squarespace.com/static/5717b2c82b8dde83cf76c2b2/5913bdd62994ca3a9fc3e64d/5913bdd7c534a5e3456902e7/1494466009609/titolo-swiss-sneaker-king-store-in-basel-1493369494-1.jpg');
  height: 500px;
`

class HomePage extends Component {
  render () {
    return (   
      <Jumbotron>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
    
        <StyledLink to='/user'>Sneaker Colle¢t</StyledLink>

      </Jumbotron>
    
    )
  }
};

export default HomePage