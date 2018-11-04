import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  padding: 0.5em 1em;
  border-radius: 3px;
  background: linear-gradient(
    135deg,
    rgba(203, 86, 245, 1) 0%,
    rgba(252, 222, 51, 1) 100%
  );
  color: white;
  cursor: pointer;
`

const Button = props => {
  return <Wrapper onClick={props.handleSubmit}>Login</Wrapper>
}

export default Button
