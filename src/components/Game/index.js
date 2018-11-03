import React from 'react'
import Bar from './Bar'
import Lottery from './Lottery'
import Test from './Test'
import Result from './Result'

class Index extends React.Component {

  state = {
    data: '', // here we will store images and words from Clarifai

    currView: 'lottery',

    currWord: '', 
    currResult: 'success',

    round: 1,
    score: 0,
  }

  updateView() {
    this.setState({
      currView: ''
    })
  }

  handleLottery() {

    this.setState({
      currWord: '',
    })

    this.updateView('test');
  }

  handleTest() {

    this.setState({
      currResult: '',
    })

    this.updateView('result');
  }

  handleResult() {

    this.setState({
      currRound: this.state.round,
    })

    this.updateView('lottery');
  }

  render() {

    return (
      <div>

        {this.state.currView === 'lottery' &&
          <Lottery result={this.state.currResult} handleLottery={this.handleLottery} />
        }

        {this.state.currView === 'test' &&
          <Test />
        }

        {this.state.currView === 'result' &&
          <Result />
        }
      </div>
    )
  }
}

export default Index
