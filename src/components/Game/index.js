import React from 'react'
import Bar from './Bar'
import Lottery from './Lottery'
import Test from './Test'
import Result from './Result'
import styled from 'styled-components'

const maxRound = 4

export default class extends React.Component {
  state = {
    data: this.props.data,

    currView: 'lottery',

    currWord: 'hello',
    currResult: 'success',

    round: 1,
    score: 0,
  }

  updateView(newView) {
    this.setState({
      currView: newView,
    })
  }

  handleLottery(word) {
    this.setState({
      currWord: word,
    })

    this.updateView('test')
  }

  handleTest(result, score) {
    this.setState({
      currResult: result,
      score: this.state.score + score,
    })

    this.updateView('result')
  }

  handleResult() {
    console.log('next round')

    this.setState({
      round: this.state.round + 1,
    })

    if (this.state.round > maxRound) this.props.gameOver(this.state.score)

    this.updateView('lottery')
  }

  render() {

    return (
      <Game>
        {this.state.currView === 'lottery' && (
          <Lottery
            data={this.state.data}
            handleLottery={this.handleLottery.bind(this)}
          />
        )}

        {this.state.currView === 'test' && (
          <Test
            data={this.state.data}
            word={this.state.currWord}
            handleTest={this.handleTest.bind(this)}
          />
        )}

        {this.state.currView === 'result' && (
          <Result
            score={this.state.score}
            result={this.state.currResult}
            handleResult={this.handleResult.bind(this)}
          />
        )}

        <Bar
          round={this.state.round}
          score={this.state.score}
          maxRound={maxRound}
        />
      </Game>
    )
  }
}

const Game = styled.div`
  height: 100vh;
`
