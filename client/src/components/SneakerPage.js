import React, { Component } from 'react'
import axios from 'axios'
import Sneaker from './Sneaker.js'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`
const StyledLink = styled(Link)`
margin: 0 auto;
background: blue;
border: 2px solid blue;
border-radius: 10px;
color: white;
font-size: 20px;
height: 20px;
width: 70px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  align-items: center;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 2px;
  margin: 15px 15px 15px 0;
`

const FlexContainerCentered = styled.div`
  display: flex;
  align-items: center;
`

const FlexRowCentered = styled(FlexContainerCentered)`
  flex-direction: row;
  flex-wrap: wrap;
`

// const PrimaryButton = styled.button`
//   /* background-color: blue; */
//   color: blue;
//   font-weight: bold;
//   cursor: pointer;
//   padding: 15px;
//   font-size: 1em;
//   border: 2px solid salmon;
//   border-radius: 3px;
// `

const DeleteButton = styled.button`
height: 40px;
margin: 0 auto;
margin-top: 20px;
margin-right: 800px;
width: 120px;
border-radius: 10px;
background: salmon;
font-weight: bold;
color: white;
`

class SneakerPage extends Component {
  state = {
    users: {
      userName: ''
    },
    sneakers: []
  }

  componentDidMount = () => {
    if (this.props.match.params) {
      axios.get(`/api/users/${this.props.match.params.userId}`).then(res => {
        this.setState({
          sneakers: res.data.sneakers,
          user: {
            _id: res.data._id,
            userName: res.data.userName
          }
        })
      })
    }
  }

  createSneaker = () => {
    const userId = this.props.match.params.userId
    axios.post(`/api/users/${userId}/sneakers`).then(res => {
      const newSneakers = [...this.state.sneakers]
      newSneakers.unshift(res.data) 
      this.setState({ sneakers: newSneakers })
    })
  }
  // This will add the new Sneaker to the beginning of the array

  deleteSneaker = sneaker => {
    const userId = this.props.match.params.userId
    const sneakerId = sneaker._id
    axios.delete(`/api/users/${userId}/sneakers/${sneakerId}`).then(res => {
      this.setState({ sneakers: res.data })
    })
  }

  deleteUser=()=>{
    const userId=this.props.match.params.userId
    axios.delete(`/api/users/${userId}`)
    .then(()=>{
      this.props.history.goBack()
    })
  }
  //Add funcionality to delete a user


  handleChange = (sneaker, event) => {
    console.log('HANDLE CHANGE')
    
    const newSneakers = [...this.state.sneakers]

    const sneakers = newSneakers.map(savedSneaker => {
      if (savedSneaker._id === sneaker._id) {
        savedSneaker[event.target.name] = event.target.value
      }
      return savedSneaker
    })
    this.setState({sneakers: sneakers})
  }

  updateSneaker = (sneaker, e) => {
    const userId = this.props.match.params.userId
    axios
      .patch(`/api/users/${userId}/sneakers/${sneaker._id}`, { sneaker })
      .then(res => {
        this.setState({ sneakers: res.data.sneakers })
      })
  }

  render () {
    return (
      <div>
        <Wrapper>
        <StyledLink to='/user' style={{ marginRight: '820px' }}>
            Back
          </StyledLink>
          <DeleteButton onClick={()=>this.deleteUser(this.state.user.userId)}>Delete User</DeleteButton>

          <br/>
          <br/>
          

          <h1>User's Sneaker Collection</h1>
          {/* <Button onClick={this.createSneaker}>New Sneaker</Button> */}
          <button onClick={this.createSneaker}>+ Add Sneaker</button>

          <FlexRowCentered>
            {this.state.sneakers.map(sneaker => {
              return (
                <Card>
                  
                    <Sneaker
                      key={sneaker._id}
                      sneaker={sneaker}
                      deleteSneaker={this.deleteSneaker}
                      handleChange={this.handleChange}
                      updateSneaker={this.updateSneaker}
                    />
                  
                </Card>
              )
            })}
          </FlexRowCentered>
        </Wrapper>
      </div>
    )
  }
}

export default SneakerPage
