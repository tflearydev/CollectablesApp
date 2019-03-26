import React, { Component } from 'react'
import axios from 'axios'
import Sneaker from './Sneaker.js'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafa98;
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

const PrimaryButton = styled.button`
  background-color: aquamarine;
  color: #222;
  font-weight: bold;
  cursor: pointer;
  padding: 15px;
  font-size: 1em;
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
      newSneakers.unshift(res.data) // This will add the new Sneaker to the beginning of the array
      this.setState({ sneakers: newSneakers })
    })
  }

  deleteSneaker = sneaker => {
    const userId = this.props.match.params.userId
    const sneakerId = sneaker._id
    axios.delete(`/api/users/${userId}/sneakers/${sneakerId}`).then(res => {
      this.setState({ sneakers: res.data })
    })
  }

  handleChange = (sneaker, event) => {
    console.log('HANDLE CHANGE')
    // Here we use the spread operator to clone the array
    const newSneakers = [...this.state.sneakers]

    // Map through this cloned state and transform the specific sneaker that has been updated.
    const sneakers = newSneakers.map(savedSneaker => {
      if (savedSneaker._id === sneaker._id) {
        // Here we are using bracket syntax instead of dot-notation to transform a specific property
        // More info on bracket syntax here
        // https://medium.com/@prufrock123/js-dot-notation-vs-bracket-notation-797c4e34f01d
        savedSneaker[event.target.name] = event.target.value
      }
      return savedSneaker
    })
    this.setState({ sneakers: sneakers })
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
          <Button href='/user' style={{ marginRight: '820px' }}>
            Back
          </Button>

          <h1>User's Collection</h1>
          <Button onClick={this.createSneaker}>New Sneaker</Button>
          <FlexRowCentered>
            {this.state.sneakers.map(sneaker => {
              return (
                <Card>
                  <div>
                    <Sneaker
                      key={sneaker._id}
                      sneaker={sneaker}
                      deleteSneaker={this.deleteSneaker}
                      handleChange={this.handleChange}
                      updateSneaker={this.updateSneaker}
                    />
                  </div>
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
