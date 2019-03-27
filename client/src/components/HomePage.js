import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HomePage extends Component {
  render () {
    return (
      <div>
        <h1>Sneaker Colle¢t</h1>
        <Link to='/user'>Enter Here</Link>
      </div>
    )
  }
};

export default HomePage