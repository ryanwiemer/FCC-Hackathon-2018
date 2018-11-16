import React from 'react'
import styled from 'styled-components'
import Select from './Select'
import Clarifai from 'clarifai'
import Instagram from 'node-instagram'

const app = new Clarifai.App({
  apiKey: process.env.GATSBY_CLARIFY_KEY,
})

let DERIVED_ACCESS_TOKEN = ''

const REDIRECT_URL = process.env.GATSBY_REDIRECT_URL
const url = `https://api.instagram.com/oauth/authorize/?client_id=${
  process.env.GATSBY_INSTAGRAM_ID
}&redirect_uri=${REDIRECT_URL}&response_type=token`

export default class ClarifaiData extends React.Component {
  constructor() {
    super()
    this.state = { data: [] }
  }

  getClarifaiData(urls) {
    // console.log(urls);
    var result = []
    const language =
      localStorage.getItem('language') !== null
        ? localStorage.getItem('language')
        : 'en'

    for (var i = 0; i < urls.length; i++) {
      // var currentComb = {};
      // currentComb.url = urls[i];

      app.models
        .predict(Clarifai.GENERAL_MODEL, urls[i], {
          language: language,
        })
        .then(res => {
          var word = res['outputs'][0]['data']['concepts'][0]['name']

          var image = res['outputs'][0]['input']['data']['image']['url']

          var currentComb = {}
          currentComb.image = image
          currentComb.word = word
          result.push(currentComb)
        })
    }
    // this.setState({ data: result })

    // this.props.sendData(result)

    // console.log(result)
  }

  getInstagramToken() {
    window.location.replace(url)
  }

  componentDidMount() {
    const hash = window.location.hash
    DERIVED_ACCESS_TOKEN = hash.split('=')[1]
    // console.log(DERIVED_ACCESS_TOKEN)
    const instagram = new Instagram({
      clientId: process.env.GATSBY_INSTAGRAM_ID,
      clientSecret: process.env.GATSBY_INSTAGRAM_SECRET,
      accessToken: DERIVED_ACCESS_TOKEN,
    })
    instagram.get('users/self/media/recent', (err, data) => {
      if (err) {
        // an error occured
        console.log(err)
      } else {
        let userImagesArray = []
        const imageLimit = 19
        for (let i = 0; i < imageLimit; i++) {
          let currentImage =
            data['data'][i]['images']['standard_resolution']['url']
          // console.log(currentImage)
          userImagesArray.push(currentImage)
          // this.getClarifaiData(currentImage);
        }
        this.getClarifaiData(userImagesArray).bind(this)
      }
    })
  }

  render() {
    console.log(url)
    return (
      <Wrapper>
        <Container>
          <Title>youlingual</Title>
          <SubTitle>I want to learn</SubTitle>
          <Row>
            <Select
              languages={this.props.languages}
              currentLanguage={this.props.currentLanguage}
              handleChange={this.props.handleChange}
            />
          </Row>
          <Row>
            <Button
              onClick={this.getInstagramToken}
              handleLogin={this.props.handleLogin}
            >
              {this.props.buttonMessage}
            </Button>
          </Row>
        </Container>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  border-radius: 3px;
  padding: 2em 2em 0 2em;
  margin: 0 auto;
  text-align: center;
  @media screen and (min-height: 500px) {
    padding: 4em 2em 0 2em;
  }
`

const Row = styled.div`
  margin: 0 0 2rem 0;
`

const Title = styled.h1`
  font-size: 3em;
  font-weight: bold;
  text-align: center;
  margin: 0 0 2rem 0;
  @media screen and (min-height: 500px) {
    position: absolute;
    top: 2rem;
    left: 0;
    width: 100%;
  }
`

const SubTitle = styled.h2`
  font-size: 1em;
  text-align: center;
  margin: 0 0 2rem 0;
`

const Button = styled.button`
  padding: 0.5em 1em;
  border-radius: 3px;
  background: linear-gradient(
    135deg,
    rgba(203, 86, 245, 1) 0%,
    rgba(252, 222, 51, 1) 100%
  );
  color: white;
  cursor: pointer;
  font-weight: bold;
`
