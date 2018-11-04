import React from 'react'
import styled from 'styled-components'

export default props => {
  return <Bar>
    <p>{props.round} / 20</p>
    <p>💎 {props.score}</p>
  </Bar>
}

const Bar = styled.section`
position: absolute;
left: 0;
bottom: 0;
width: 100vw;

display: flex;
justify-content: space-between;

padding: .5rem;

font-size: 1.2rem;
font-weight: bold;
`