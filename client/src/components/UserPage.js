import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { Card } from 'react-bootstrap'

const StyledLink = styled(Link)`
  margin: 0 auto;
  background: silver;
  border: 2px solid black;
  border-radius: 8px;
  width: 200px;
  height: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
`;


class UserPage extends Component {
  // creating a method to get all users
  state = {
    users: [],
    user: {
      userName: '',
      password: ''
    },
    redirectToHome: false,
    createdUser: {}
  }

  componentDidMount = () => {
    this.getAllUsers()
  }

  getAllUsers = () => {
    axios.get('/api/users').then(res => {
      this.setState({ users: res.data })
    })
  }
  // created a method to get all users

  createUser = () => {
    axios.post('/api/users', { user: this.state.user }).then(res => {
      console.log(res.data)
      this.setState({ redirectToHome: true, createdUser: res.data })
    })
  }

  handleChange = (e) => {
    const newUser = { ...this.state.user }
    newUser[e.target.name] = e.target.value
    this.setState({ user: newUser })
  }

  handleSignUp = (e) => {
    e.preventDefault()
    this.createUser()
  }

  render () {
    if (this.state.redirectToHome === true) {
      return <Redirect to={`/user/${this.state.createdUser._id}`} />
    }

    return (
      <div>
        <Button href='/' style={{ marginRight: '820px' }}>
          Back
        </Button>

        <h1>Select or Create User</h1>

        <br />

        {this.state.users.map(user => {
          return (
            <div>
              <Card>
                <Card.Body>
                  <StyledLink to={`/user/${user._id}`} key={user._id}>
                    {user.userName}
                  </StyledLink>
                </Card.Body>
              </Card>
            </div>
          )
        })}
        <br />
        <br />

        <form onSubmit={this.handleSignUp}>
          <div>
            <label htmlFor='userName'>Username</label>
            <input
              type='text'
              name='userName'
              onChange={this.handleChange}
              value={this.state.user.userName}
            />
          </div>
          <div>
            <label htmlFor='password'>password</label>
            <input
              type='password'
              name='password'
              onChange={this.handleChange}
              value={this.state.user.password}
            />
          </div>
          
          <button>+ Create User</button>
          
        </form>
      </div>
    )
  }
}

export default UserPage
