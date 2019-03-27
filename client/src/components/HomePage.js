import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

class HomePage extends Component {
  render () {
    return (
      <Jumbotron>
          <Image src=""/>
        <h1>Sneaker Colle¢t</h1>
        <Link to='/user'>Enter Here</Link>
      </Jumbotron>
    )
  }
};

export default HomePage