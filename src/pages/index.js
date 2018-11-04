import React from 'react'
import Layout from '../components/Layout'
import Game from '../components/Game'
import Login from '../components/Login'
import Share from '../components/Share'

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
    })
  }

  render() {
    const { currentPage } = this.state
    return (
      <Layout>
        <h1>{currentPage}</h1>

        {currentPage === 'login' && (
          <Login
            languages={this.state.languages}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        )}

        {currentPage === 'game' && <Game />}

        {currentPage === 'share' && <Share />}
      </Layout>
    )
  }
}

export default IndexPage
