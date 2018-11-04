import React from 'react'
import styled from 'styled-components'
import Word from './Word'

export default class extends React.Component {
  state = {
    time: 6000,
  }

  componentDidMount() {
    this.interval = setInterval(this.updateCount.bind(this), 200)
  }

  updateCount() {
    this.setState({ time: this.state.time - 200 })

    if (this.state.time <= 0) {
      this.props.handleTest('timesUp', 0)
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const winScore = 6 + Math.floor(this.state.time / 1000)

    return (
      <div>
        <Countdown>⏰ {this.state.time / 1000}s</Countdown>
        <Question>Where's</Question>
        <Word>{this.props.word}</Word>
        <Answers>
          {/* correct answer */}
          {this.props.data
            .filter(item => item.word === this.props.word)
            .slice(0, 1)
            .map(item => (
              <img
                onClick={() => this.props.handleTest('success', winScore)}
                src={item.image}
                key={item.word}
                alt={item.word}
              />
            ))}

          {/* wrong answers */}
          {this.props.data
            .filter(item => item.word !== this.props.word)
            .slice(0, 3)
            .map(item => (
              <img
                onClick={() => this.props.handleTest('fail', 0)}
                src={item.image}
                key={item.word}
                alt={item.word}
              />
            ))}
        </Answers>
      </div>
    )
  }
}

const Countdown = styled.div`
  position: absolute;
  font-weight: bold;
  top: 0.5rem;
  right: 0.5rem;
  width: 65px;
`

const Question = styled.p`
  text-align: center;
  margin-top: 2rem;
`

const Answers = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  max-width: calc(100vh - 12rem);

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  > * {
    width: calc(50% - 1rem);
    padding: 0.5rem;
  }
`
