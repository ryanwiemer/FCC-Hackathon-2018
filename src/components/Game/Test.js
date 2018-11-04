import React from 'react'
import styled from 'styled-components'

export default props => {

  return (
    <div>
      <Question>Where's</Question>
      <Word>{props.word}</Word>
      <Answers>
        {/* add: answers with onClick="props.handleTest()" */}
      </Answers>
    </div>
  )
}

const Question = styled.p`
text-align: center;
`

const Word = styled.h1`
text-align: center;
`

const Answers = styled.section`
display: grid;
grid-template-column: 1fr 1fr;
grid-gap: .5rem;
`