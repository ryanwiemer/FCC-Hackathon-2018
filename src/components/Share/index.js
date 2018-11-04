import React from 'react'
import styled from 'styled-components'
import ScoreBoard from './ScoreBoard'
import SocialShare from './SocialShare'
import StartAgain from './StartAgain'

const Title = styled.h1`
  font-size: 3em;
`

const Share = () => {
  return (
    <>
      <Title>Congrats!</Title>
      <ScoreBoard score="100" />
      <SocialShare />
      <StartAgain />
    </>
  )
}

export default Share
