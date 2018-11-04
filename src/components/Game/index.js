import React from 'react'
import Bar from './Bar'
import Lottery from './Lottery'
import Test from './Test'
import Result from './Result'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: '', // here we will store images and words from Clarifai

      currView: 'lottery',

      currWord: '',
      currResult: 'success',

      round: 1,
      score: 0,
    }
  }

  updateView() {
    this.setState({
      currView: '',
    })
  }

  handleLottery() {
    this.setState({
      currWord: '',
    })

    this.updateView('test')
  }

  handleTest() {
    this.setState({
      currResult: '',
    })

    // add: update score

    this.updateView('result')
  }

  handleResult() {
    this.setState({
      currRound: this.state.round,
    })

    this.updateView('lottery')
  }

  render() {
    return (
      <div>
        {this.state.currView === 'lottery' && (
          <Lottery data={this.state.data} handleLottery={this.handleLottery} />
        )}

        {this.state.currView === 'test' && (
          <Test
            data={this.state.data}
            word={this.state.currWord}
            handleTest={this.handleTest}
          />
        )}

        {this.state.currView === 'result' && (
          <Result
            result={this.state.currResult}
            handleResult={this.handleResult}
          />
        )}

        <Bar round={this.state.round} score={this.state.score} />
      </div>
    )
  }
}
