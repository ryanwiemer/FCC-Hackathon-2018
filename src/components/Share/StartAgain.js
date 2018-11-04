import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  padding: 0.5em;
  border-radius: 3px;
  background: ${props => props.theme.colors.primary};
  color: white;
  cursor: pointer;
`

const StartAgain = props => {
  return <Wrapper onClick={props.handleRestart}>Play again</Wrapper>
}

export default StartAgain
