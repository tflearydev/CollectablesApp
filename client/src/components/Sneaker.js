import React from 'react'
import styled from 'styled-components'

function Sneaker(props) {
    return (
        // <SneakerWrapper>
        <div>
            <input
                type="text"
                name="title"
                onChange={(e) => props.handleChange(props.sneaker, e)}
                onMouseOut={(e) => props.updateSneaker(props.sneaker, e)}
                value={props.sneaker.title}
            />
            <textarea
                name="description"
                cols="30"
                rows="10"
                onChange={(e) => props.handleChange(props.sneaker, e)}
                onMouseOut={(e) => props.updateSneaker(props.sneaker, e)}
                value={props.sneaker.description}
            />
            <div
                onClick={() => props.deleteSneaker(props.sneaker)}
            >
                Delete Sneaker
             </div>
             </div>
    )
}

export default Sneaker
