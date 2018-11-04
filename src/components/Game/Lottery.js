import React from 'react'
import styled from 'styled-components'
import Word from './Word'

export default class extends React.Component {

  state = {
    list: this.props.data.map(item => item.word),
    index: 0,
  }

  componentDidMount() {

    this.interval = setInterval(this.updateCount.bind(this), 150)

  }

  updateCount() {

    this.setState({ index: this.state.index + 1 })

    if (this.state.index === 10) {

      const randomWord = this.state.list[Math.floor(Math.random()*this.state.list.length)]

      this.props.handleLottery(randomWord)

    }

  }

  componentWillUnmount() {

    clearInterval(this.interval)

  }

  render() {
  
    const word = this.state.list[this.state.index % this.state.list.length]
  
    return (
      <Container>
        <Word>{word}</Word>
      </Container>
    )
  }

}

const Container = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`