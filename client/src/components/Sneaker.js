import React from 'react'
import styled from 'styled-components'

const SneakerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    
    input, textarea,  {
        padding: 10px;
        margin-bottom: 5px;
        font-size: 1.05em;
        background-color: transparent;
        border: none;
    }
    input {
        font-size: 1.15em;
        font-weight: bold;
    }
    textarea {
        background-color: white;
    }
    
`

const DeleteButton = styled.button`
    background-color: salmon;
    color: #eee;
    font-weight: bold;
    cursor: pointer;
    padding: 15px;
    font-size: 1em;
`




function Sneaker (props) {
  return (
    <SneakerWrapper>
    
      <input
        type='text'
        name='title'
        // cols='30'
        // rows='5'
        onChange={e => props.handleChange(props.sneaker, e)}
        onMouseOut={e => props.updateSneaker(props.sneaker, e)}
        value={props.sneaker.title}
      />

      <textarea
        name='description'
        cols='30'
        rows='5'
        onChange={e => props.handleChange(props.sneaker, e)}
        onMouseOut={e => props.updateSneaker(props.sneaker, e)}
        value={props.sneaker.description}
      />

      {/* <input
      name='value'
      cols='30'
      rows='2'
      /> */}


      <DeleteButton onClick={() => props.deleteSneaker(props.sneaker)}>
        Delete Sneaker
      </DeleteButton>
      </SneakerWrapper>
    
  )
}

export default Sneaker
