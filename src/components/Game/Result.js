import React from 'react'
import styled from 'styled-components'

const View = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  text-align: center;
`

const Heading = styled.h1`
  line-height: 1.2;
  font-size: 2em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 3em;
  }
`

export default props => {
  setTimeout(
    // after 3s
    function() {
      props.handleResult() // go to next round
    },
    3000
  )

  if (props.result === 'success') {
    return (
      <View>
        <Heading>Correct, Great Job! 🎉</Heading>
      </View>
    )
  } else if (props.result === 'fail') {
    return (
      <View>
        <Heading>Sorry, Incorrect 😭</Heading>
      </View>
    )
  } else {
    return (
      <View>
        <Heading>Sorry, Time Ran Out! ⏰</Heading>
      </View>
    )
  }
}
