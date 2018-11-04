import React from 'react'
import styled from 'styled-components'
import ScoreBoard from './ScoreBoard'
import SocialShare from './SocialShare'
import StartAgain from './StartAgain'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  min-height: 400px;
  background: linear-gradient(
    135deg,
    rgba(203, 86, 245, 1) 0%,
    rgba(252, 222, 51, 1) 100%
  );
`

const Container = styled.div`
  display: inline-block;
  text-align: center;
  padding: 2em;
  margin: 0 auto;
  color: white;
  a {
    color: white;
  }
  svg {
    fill: white;
  }
`

const Title = styled.h1`
  text-align: center;
  font-size: 1em;
  margin: 0 0 2rem 0;
`

const Share = props => {
  return (
    <Wrapper>
      <Container>
        <Title>Wow! You scored:</Title>
        <ScoreBoard score="100" />
        <SocialShare />
        <StartAgain handleRestart={props.handleRestart} />
      </Container>
    </Wrapper>
  )
}

export default Share
