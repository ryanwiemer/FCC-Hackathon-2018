import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

const SubTitle = styled.h2`
  font-size: 1.5em;
`

const Number = styled.h2`
  font-size: 4em;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 0 3rem 0;
`

const ScoreBoard = props => {
  return (
    <Wrapper>
      <Number>{props.score} points</Number>
    </Wrapper>
  )
}

export default ScoreBoard
