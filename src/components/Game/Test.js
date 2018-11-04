import React from 'react'
import styled from 'styled-components'
import Word from './Word'

export default props => {

  return (
    <div>
      <Question>Where's</Question>
      <Word>{props.word}</Word>
      <Answers>
        {/* add: answers with onClick="props.handleTest()" */}
        <img onClick={() => props.handleTest('success')} src="https://scontent.cdninstagram.com/vp/44c2861a181a144326c1fba200e97143/5C6E41FD/t51.2885-15/sh0.08/e35/s640x640/32698648_1779293725450764_884912783672475648_n.jpg"></img>
        <img src="https://scontent.cdninstagram.com/vp/44c2861a181a144326c1fba200e97143/5C6E41FD/t51.2885-15/sh0.08/e35/s640x640/32698648_1779293725450764_884912783672475648_n.jpg"></img>
        <img src="https://scontent.cdninstagram.com/vp/44c2861a181a144326c1fba200e97143/5C6E41FD/t51.2885-15/sh0.08/e35/s640x640/32698648_1779293725450764_884912783672475648_n.jpg"></img>
        <img src="https://scontent.cdninstagram.com/vp/44c2861a181a144326c1fba200e97143/5C6E41FD/t51.2885-15/sh0.08/e35/s640x640/32698648_1779293725450764_884912783672475648_n.jpg"></img>
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
  padding: .5rem;
}
`