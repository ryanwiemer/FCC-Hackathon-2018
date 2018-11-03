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
    currResult: '',

    round: 1,
    score: 0,
  }

  updateView() {
    this.setState({
      currView: ''
    })
  }

  updateWord() {
    this.setState({
      currWord: '',
    })
  }

  updateResult() {
    this.setState({
      currResult: '',
    })
  }

  render() {

    return (
      <div>

        {this.state.currView === 'lottery' &&
          <Lottery />
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
