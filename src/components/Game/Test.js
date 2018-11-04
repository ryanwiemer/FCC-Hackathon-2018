import React from 'react'
import styled from 'styled-components'
import Word from './Word'

export default props => {

  setTimeout( // after 3s
    function() {
        props.handleTest('timesup'); // go to next round
    }
    .bind(this),
    6000
  );

  return (
    <div>
      <Question>Where's</Question>
      <Word>{props.word}</Word>
      <Answers>

        {/* correct answer */}
        {props.data.filter(item => item.word === props.word).slice(0,1).map(item => (
          <img
            onClick={() => props.handleTest('success')}
            src={item.image}
            key={item.word}
            alt={item.word}
          />
        ))}

        {/* wrong answers */}
        {props.data.filter(item => item.word !== props.word).slice(0,3).map(item => (
          <img
            onClick={() => props.handleTest('fail')}
            src={item.image}
            key={item.word}
            alt={item.word}
          />
        ))}

        </Answers>
    </div>
  )
}

const Question = styled.p`
  text-align: center;
  margin-top: 2rem;
`

const Answers = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  max-width: calc(100vh - 12rem);

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  > * {
    width: calc(50% - 1rem);
    padding: 0.5rem;
  }
`
