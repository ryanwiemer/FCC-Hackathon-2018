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
  background-color: ${props => props.background};
`

const Heading = styled.h1`
  line-height: 1.2;
  font-size: 2em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 3em;
  }
`
export default class extends React.Component {
  state = {
    time: 1200,
  }

  componentDidMount() {
    this.interval = setInterval(this.updateCount.bind(this), 100)
  }

  updateCount() {
    this.setState({ time: this.state.time - 100 })

    if (this.state.time <= 0) {
      this.props.handleResult()
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    if (this.props.result === 'success') {
      return (
        <View background="#FCDE33">
          <Heading>Correct, Great Job! 🎉</Heading>
        </View>
      )
    } else if (this.props.result === 'fail') {
      return (
        <View background="#BCC4DE">
          <Heading>Sorry, Incorrect 😭</Heading>
        </View>
      )
    } else {
      return (
        <View background="#E2E2E2">
          <Heading>Sorry, Time Ran Out! ⏰</Heading>
        </View>
      )
    }
  }
}
