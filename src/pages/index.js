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
          message: `Let's Go!`,
        },
        {
          title: 'Spanish',
          code: 'es',
          message: `¡Vamos!`,
        },
        {
          title: 'French',
          code: 'fr',
          message: `Allons-y!`,
        },
      ],
      currentLanguage: '',
      buttonMessage: '',
      currentPage: 'login',
      finalScore: null,
    }
  }

  handleChange = event => {
    // change the current language based on the user's selection
    this.setState({
      currentLanguage: event.target.value,
    })

    // change the Login Button's text based on the language selected
    this.state.languages.map((language) => {
      if (language.code == event.target.value) {
        this.setState({
          buttonMessage: language.message
        })
      }
    })
  }

  handleLogin = event => {
    this.setState({
      currentPage: 'game',
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
              handleLogin={this.handleLogin}
              handleSubmit={this.handleSubmit}
              sendData={this.receiveData}
              currentLanguage={this.state.currentLanguage}
              buttonMessage={this.state.buttonMessage}
            />
            {/* <API sendData={this.receiveData} /> */}
          </div>
        )}

        {currentPage === 'game' && (
          <Game data={this.state.data} gameOver={this.gameOver} />
        )}

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
