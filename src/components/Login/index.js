import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Select from './Select'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: 500px;
  border-radius: 3px;
  padding: 2em;
  margin: 0 auto;
`

const Row = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 2rem 0;
`

const Title = styled.h1`
  position: absolute;
  top: 2rem;
  font-size: 3em;
  font-weight: bold;
  text-align: center;
  margin: 0 0 2rem 0;
`

const SubTitle = styled.h2`
  font-size: 1em;
  text-align: center;
  margin: 0 0 2rem 0;
`

const Login = props => {
  return (
    <Wrapper>
      <Title>youlingual</Title>
      <Container>
        <SubTitle>I want to learn</SubTitle>
        <Row>
          <Select
            languages={props.languages}
            handleChange={props.handleChange}
          />
        </Row>
        <Row>
          <Button handleSubmit={props.handleSubmit} />
          <button onClick={props.handleShare}>Skip to share view</button>
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Login
