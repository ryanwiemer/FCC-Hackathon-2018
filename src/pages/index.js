import React from 'react'
import Layout from '../components/Layout'
import Game from '../components/Game'
import Login from '../components/Login'
import Share from '../components/Share'
import apidata from '../components/apidata'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
      instagramToken: '',
      finalScore: null,
    }
  }

  handleChange = event => {
    this.setState({
      currentLanguage: event.target.value,
    })
  }

  handleSubmit = event => {
    // If authentication is successful
    this.setState({
      currentPage: 'game',
      instagramToken: '',
    })
  }

  handleRestart = event => {
    this.setState({
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
          <Login
            languages={this.state.languages}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        )}

        {currentPage === 'game' && <Game gameOver={this.gameOver} />}

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
