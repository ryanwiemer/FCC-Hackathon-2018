import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

const Number = styled.h2``

const ScoreBoard = props => {
  return (
    <Wrapper>
      <Number>{props.score}</Number>
    </Wrapper>
  )
}

export default ScoreBoard
