import React from 'react'
import Bar from './Bar'
import Lottery from './Lottery'
import Test from './Test'
import Result from './Result'
import styled from 'styled-components'

export default class extends React.Component {

  state = {
    data: '', // here we will store images and words from Clarifai

    currView: 'lottery',

    currWord: '', 
    currResult: 'success',

    round: 1,
    score: 0,
  }

  updateView(newView) {
    this.setState({
      currView: newView
    })
  }

  handleLottery(word) {

    this.setState({
      currWord: word,
    })

    this.updateView('test');
  }

  handleTest() {

    this.setState({
      currResult: '',
    })

    // add: update score

    this.updateView('result');
  }

  handleResult() {

    this.setState({
      currRound: this.state.round + 1,
    })

    // if (this.state.round === 20)

    this.updateView('lottery');
  }

  render() {

    return (
      <Game>

        {this.state.currView === 'lottery' &&
          <Lottery data={this.state.data} handleLottery={this.handleLottery.bind(this)} />
        }

        {this.state.currView === 'test' &&
          <Test data={this.state.data} word={this.state.currWord} handleTest={this.handleTest} />
        }

        {this.state.currView === 'result' &&
          <Result result={this.state.currResult} handleResult={this.handleResult} />
        }

        <Bar round={this.state.round} score={this.state.score} />
      </Game>
    )
  }
}

const Game = styled.div`
height: 100vh;
`
