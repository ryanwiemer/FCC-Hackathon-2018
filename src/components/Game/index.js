import React from 'react'
import Bar from './Bar'
import Lottery from './Lottery'
import Test from './Test'
import Result from './Result'
import styled from 'styled-components'

const maxRound = 4

// const dummy_data = [{"image":"https://scontent.cdninstagram.com/vp/98daff53e75bfaec4fb1486816ddf9f9/5C89A612/t51.2885-15/sh0.08/e35/s640x640/42792197_562476894173684_1075559516549129020_n.jpg","word":"fruto"},{"image":"https://scontent.cdninstagram.com/vp/118a695573e2b8c831c123223da14055/5C7ACDED/t51.2885-15/sh0.08/e35/s640x640/42717335_278362616122889_9139214579313972330_n.jpg","word":"naturaleza"},{"image":"https://scontent.cdninstagram.com/vp/5f9864904c2bc953d6d9f28683deeaa7/5C7B78BA/t51.2885-15/sh0.08/e35/p640x640/42785194_293236131282961_1615447573232853767_n.jpg","word":"pueblo"},{"image":"https://scontent.cdninstagram.com/vp/88c01a6e819d085bbd2ffcf734b14f84/5C7B0D66/t51.2885-15/sh0.08/e35/s640x640/42810369_2246095125463195_5979544813488082326_n.jpg","word":"ciudad"},{"image":"https://scontent.cdninstagram.com/vp/8522f7e50bc3c8ff00b8630cfab1d4fd/5C6727B6/t51.2885-15/sh0.08/e35/s640x640/43743966_1095733077254854_2486463630398548365_n.jpg","word":"pueblo"},{"image":"https://scontent.cdninstagram.com/vp/15ee4e46dff630a7005b26f5d3948d78/5C70439D/t51.2885-15/sh0.08/e35/p640x640/42650881_305127913619657_5794516457330944673_n.jpg","word":"paisaje"},{"image":"https://scontent.cdninstagram.com/vp/195d13ae68d51296cd8fba778df43bce/5C7021E0/t51.2885-15/sh0.08/e35/s640x640/30601584_409551549516871_3685639645766352896_n.jpg","word":"masculino"},{"image":"https://scontent.cdninstagram.com/vp/1f337cb2c58a5f025082ca95cbe90500/5C8486CA/t51.2885-15/sh0.08/e35/s640x640/37705214_1759070407511141_3521285175927373824_n.jpg","word":"pueblo"},{"image":"https://scontent.cdninstagram.com/vp/21164be6755de4025071c5be3ecbac85/5C7A0278/t51.2885-15/sh0.08/e35/s640x640/38508520_1805211426240271_5834878393497157632_n.jpg","word":"playa"},{"image":"https://scontent.cdninstagram.com/vp/35eca25cd757971d453d88615d9e02f4/5C85D6A8/t51.2885-15/sh0.08/e35/s640x640/34552175_1809479879095066_3225112434582749184_n.jpg","word":"arquitectura"}]

export default class extends React.Component {
  state = {
    data: this.props.data,

    currView: '',

    currWord: 'hello',
    currResult: 'success',

    round: 1,
    score: 0,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({currView: 'lottery'})
    }, 500)
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
    console.log(word);

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

    console.log(JSON.stringify(this.state.data))

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
