import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'

const feedback = () => {
  return (
    <Layout>
      <Container>
        <h1>Give us feedback!</h1>
        <form action="https://formspree.io/wolfrob35@gmail.com" method="POST">
          <label>Your Name</label>
          <input type="text" name="name" value="John Doe" />
          <label>Your Email</label>
          <input type="email" name="_replyto" value="john@doe.com" />
          <label>Your Feedback</label>
          <textarea name="message">
            Thank you for this amazing app. I already know 23 languages!
          </textarea>
          <input type="submit" value="Send" />
        </form>
      </Container>
    </Layout>
  )
}

export default feedback

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${props => props.theme.colors.primary};
  color: #fff;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  form {
    width: 100% !important;
    max-width: 500px;
  }

  label {
      display: block;
    padding: 1rem 1rem 0;
  }

  input,
  textarea {
    width: calc(100% - 2rem);
    display: block;
    margin: 1rem;
    padding: 1rem;
    background-color: #fff;
    border: 0;
    border-radius: 3px;
  }

  input[type='submit'] {
    margin: 2rem auto;
    width: auto;
    padding: .75rem 1rem;
    font-weight: bold;
  }
`
