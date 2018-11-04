import React from 'react'
import Layout from '../components/Layout'
import Game from '../components/Game'
import Login from '../components/Login'
import Share from '../components/Share'
import API from '../components/apidata'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      languages: [
        {
          title: 'English',
          code: 'en',
        },
        {
          title: 'Spanish',
          code: 'es',
        },
        {
          title: 'French',
          code: 'fr',
        },
      ],
      currentLanguage: '',
      currentPage: 'login',
      finalScore: null,
    }
  }

  handleChange = event => {
    this.setState({
      currentLanguage: event.target.value,
    })
  }

  handleRestart = event => {
    this.setState({
      currentPage: 'game',
    })
  }

  receiveData = result => {

    console.log(result)

    this.setState({
      data: result,
      currentPage: 'game',
    })

  }

  gameOver = score => {
    this.setState({
      currentPage: 'share',
      finalScore: score,
    })
  }

  render() {
    const { currentPage } = this.state
    return (
      <Layout>
        {currentPage === 'login' && (
          <div>
            <Login
              languages={this.state.languages}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              sendData={this.receiveData}
            />
            {/* <API sendData={this.receiveData} /> */}
          </div>
        )}

        {currentPage === 'game' && <Game data={this.state.data} gameOver={this.gameOver} />}

        {currentPage === 'share' && (
          <Share
            handleRestart={this.handleRestart}
            finalScore={this.state.finalScore}
          />
        )}
      </Layout>
    )
  }
}

export default IndexPage
