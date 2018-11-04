import React from 'react'
import styled from 'styled-components'
import Word from '../../styles/Word'

export default class extends React.Component {

  state = {
    list: ['banana', 'apple', 'orange'],
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
      <Word>{word}</Word>
    )
  }

}

