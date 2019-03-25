import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'

class UserPage extends Component {

    // creating a method to get all users
    state = {
        users: [],
        // user: {
        //     userName: '',
        //     password: ''
        // },
        // redirectToHome: false,
        // createdUser: {}
    }

    componentDidMount = () => {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get('/api/users').then(res => {
            this.setState({users: res.data})
        })
    }
    // created a method to get all users

    createUser = () => {
        axios.post('/api/users', {user: this.state.user})
            .then(res => {
                console.log(res.data)
                this.setState({redirectToHome: true, createdUser: res.data})
            })
    }

    handleChange = (e) => {
        const newUser = {...this.state.user}
        newUser[e.target.name] = e.target.value
        this.setState({user: newUser})
    }

    // handleSignUp = (e) => {
    //     e.preventDefault()
    //     this.createUser()
    // }
    
    render() {
        if(this.state.redirectToHome === true) {
            return (<Redirect to={`/user/${this.state.createdUser._id}`} />)
        }

        return (
            <div>
                <h1>Users</h1>
                <Link to="/">Back</Link>

                <h2>Select a user to view ¢ollection</h2>
                {
                    this.state.users.map((user) => {
                        return (
                            <Link
                                to={`/user/${user._id}`}
                                key={user._id}
                            >
                            {user.userName}
                            </Link>
                        )
                    })
                }

                <h2>Add User</h2>
                <form onSubmit={this.handleSignUp}>
                    <div>
                        <label htmlFor="userName">Username</label>
                        <input
                            type="text"
                            name="userName"
                            onChange={this.handleChange}
                            value={this.state.user.userName}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.user.password}
                        />
                    </div>
                    <button>Create User</button>
                </form>
            </div>
        )
    }
}

export default UserPage