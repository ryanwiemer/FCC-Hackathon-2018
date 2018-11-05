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
    title: 'Hindi',
    code: 'hi',
  },
  {
    title: 'Hungarian',
    code: 'hu',
  },
  {
    title: 'Italian',
    code: 'it',
  },
  {
    title: 'Japanese',
    code: 'ja',
  },
  {
    title: 'Korean',
    code: 'ko',
  },
  {
    title: 'Dutch',
    code: 'nl',
  },
  {
    title: 'Norweigan',
    code: 'no',
  },
  {
    title: 'Punjabi',
    code: 'pa',
  },
  {
    title: 'Polish',
    code: 'pl',
  },
  {
    title: 'Portuguese',
    code: 'pt',
  },
  {
    title: 'Russian',
    code: 'ru',
  },
  {
    title: 'Swedish',
    code: 'sv',
  },
  {
    title: 'Turkish',
    code: 'tr',
  },
  {
    title: 'Chinese',
    code: 'zh',
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
