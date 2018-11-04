import React from 'react'
import Bar from './Bar'
import Lottery from './Lottery'
import Test from './Test'
import Result from './Result'
import styled from 'styled-components'

const sample_data = [
  {
    image:
      'https://scontent.cdninstagram.com/vp/44c2861a181a144326c1fba200e97143/5C6E41FD/t51.2885-15/sh0.08/e35/s640x640/32698648_1779293725450764_884912783672475648_n.jpg',
    word: 'el puente',
  },
  {
    image:
      'https://scontent.cdninstagram.com/vp/174d7acb41917b91356d7a65214af138/5BE1CBF8/t51.2885-15/e15/s640x640/19534027_106047860033756_8031250803824001024_n.jpg',
    word: 'las montañas',
  },
  {
    image:
      'https://scontent.cdninstagram.com/vp/174d7acb41917b91356d7a65214af138/5BE1CBF8/t51.2885-15/e15/s640x640/19534027_106047860033756_8031250803824001024_n.jpg',
    word: 'las cascadas',
  },
  {
    image:
      'https://scontent.cdninstagram.com/vp/f2ac3be7493abb84e45f0424b9f5d189/5BE18E75/t51.2885-15/e15/s640x640/17882576_1536220006449577_5865947293563224064_n.jpg',
    word: 'el bosque',
  },
]

const maxRound = 4;

export default class extends React.Component {

  state = {
    data: sample_data,

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

  handleTest(result, score) {

    this.setState({
      currResult: result,
      score: this.state.score + score,
    })

    this.updateView('result');
  }

  handleResult() {

    console.log('next round')

    this.setState({
      round: this.state.round + 1,
    })

    if (this.state.round > maxRound) this.props.gameOver()

    this.updateView('lottery');
  }

  render() {

    return (
      <Game>

        {this.state.currView === 'lottery' &&
          <Lottery data={this.state.data} handleLottery={this.handleLottery.bind(this)} />
        }

        {this.state.currView === 'test' &&
          <Test data={this.state.data} word={this.state.currWord} handleTest={this.handleTest.bind(this)} />
        }

        {this.state.currView === 'result' &&
          <Result score={this.state.score} result={this.state.currResult} handleResult={this.handleResult.bind(this)} />
        }

        <Bar round={this.state.round} score={this.state.score}  maxRound={maxRound} />
      </Game>
    )
  }
}

const Game = styled.div`
height: 100vh;
`
