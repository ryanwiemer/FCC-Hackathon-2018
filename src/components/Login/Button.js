import React from 'react'
import styled from 'styled-components'

const LoginButton = styled.button`
  padding: 0.5em 1em;
  border-radius: 3px;
  background: linear-gradient(
    135deg,
    rgba(203, 86, 245, 1) 0%,
    rgba(252, 222, 51, 1) 100%
  );
  color: white;
  cursor: pointer;
  font-weight: bold;
`

const Button = props => {
  return (
    <LoginButton onClick={props.handleLogin}>
      { props.buttonMessage ? props.buttonMessage : `Let's Go!` }
    </LoginButton>
  )
}

export default Button
