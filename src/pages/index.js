import React from 'react'
import Layout from '../components/Layout'
import Game from '../components/Game'
import Login from '../components/Login'
import Share from '../components/Share'
// import API from '../components/apidata'

const languages = [
  {
    title: 'Arabic',
    code: 'ar',
  },
  {
    title: 'Bengali',
    code: 'ar',
  },
  {
    title: 'Danish',
    code: 'da',
  },
  {
    title: 'German',
    code: 'de',
  },
  {
    title: 'English',
    code: 'en',
  },
  {
    title: 'Spanish',
    code: 'es',
  },
  {
    title: 'Finnish',
    code: 'fi',
  },
  {
    title: 'French',
    code: 'fr',
  },
  {
    title: 'Italian',
    code: 'it',
  },
]

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      languages: languages,
      currentPage: 'login',
      finalScore: null,
    }
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
