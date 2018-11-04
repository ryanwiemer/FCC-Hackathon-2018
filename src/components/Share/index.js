import React from 'react'
import styled from 'styled-components'
import ScoreBoard from './ScoreBoard'
import SocialShare from './SocialShare'
import StartAgain from './StartAgain'
import Link from 'gatsby-link'

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

const Feedback = styled.div`
position: absolute;
left: 50%;
transform: translateX(-50%);
bottom: 1.5rem`


const Share = props => {
  return (
    <Wrapper>
      <Container>
        <Title>Wow! You scored:</Title>
        <ScoreBoard score={props.finalScore} />
        <SocialShare />
        <StartAgain handleRestart={props.handleRestart} />
        <Feedback><Link to="/feedback">Give us feedback</Link></Feedback>
      </Container>
    </Wrapper>
  )
}

export default Share
