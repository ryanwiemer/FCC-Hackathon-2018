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
`

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: 500px;
  border: 1px solid gray;
  border-radius: 3px;
  padding: 2em;
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: 2em;
  text-transform: capitalize;
  margin: 0 0 2rem 0;
`

const Login = props => {
  return (
    <Wrapper>
      <Container>
        <Title>Please select a language</Title>
        <div>
          <Select
            languages={props.languages}
            handleChange={props.handleChange}
          />
          <Button handleSubmit={props.handleSubmit} />
        </div>
      </Container>
    </Wrapper>
  )
}

export default Login
