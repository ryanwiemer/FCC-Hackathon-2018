import React from 'react'
import styled from 'styled-components'

const wordList = ['banana', 'apple', 'orange']

let i = 0
let word = wordList[1]

export default props => {
  const spin = setInterval(function() {
    word = wordList[i]

    i = i + 1
    if (i === wordList.length) i = 0
  }, 150)

  setTimeout(function() {
    clearInterval(spin)

    props.handleLottery
  }, 3000)

  return <Word>{word}</Word>
}




const Word = styled.div`
font-size: 2rem;
text-align: center;
`