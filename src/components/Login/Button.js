import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  padding: 0.5em;
  border-radius: 3px;
  background: black;
  color: white;
  cursor: pointer;
`

const Button = props => {
  return <Wrapper onClick={props.handleSubmit}>Login</Wrapper>
}

export default Button
