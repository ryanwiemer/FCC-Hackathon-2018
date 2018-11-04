import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

const Number = styled.h2`
  font-size: 2em;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 0 3rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 3em;
    margin: 0 0 3rem 0;
  }
`

const ScoreBoard = props => {
  return (
    <Wrapper>
      <Number>{props.score} points</Number>
    </Wrapper>
  )
}

export default ScoreBoard
