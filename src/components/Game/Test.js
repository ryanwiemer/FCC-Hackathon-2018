import React from 'react'
import styled from 'styled-components'
import Word from './Word'

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default class extends React.Component {
  state = {
    time: 5000,
    data: shuffle(this.props.data),
    order: Math.floor(Math.random() * 4 + 1),
  }

  componentDidMount() {
    this.interval = setInterval(this.updateCount.bind(this), 200)

    // speech
    if (typeof window !== `undefined`) {
      var synth = window.speechSynthesis
      var say = new SpeechSynthesisUtterance(this.props.word)
      say.lang = localStorage.getItem('language')
      synth.speak(say)
    }
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
    const winScore = 5 + Math.floor(this.state.time / 1000)

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
              <Answer
                onClick={() => this.props.handleTest('success', winScore)}
                src={item.image}
                key={item.image}
                alt={item.word}
                order={this.state.order}
              />
            ))}

          {/* wrong answers */}
          {this.props.data
            .filter(item => item.word !== this.props.word)
            .slice(0, 3)
            .map((item, index) => (
              <Answer
                onClick={() => this.props.handleTest('fail', 0)}
                src={item.image}
                key={index}
                alt={item.word}
                order={index}
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
  width: 100vw;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const Answer = styled.img`
  width: calc(50vw - 1rem);
  height: calc(50vw - 1rem);
  max-width: calc(50vh - 6rem);
  max-height: calc(50vh - 6rem);
  object-fit: cover;
  padding: 0.5rem;
  cursor: pointer;
  order: ${props => (props.order ? props.order : '')};
`
