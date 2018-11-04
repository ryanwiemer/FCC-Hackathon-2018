import React from 'react'
import styled from 'styled-components'

export default props => {
  return <Bar>
    <p>{props.round} / 20</p>
    <p>💎 {props.score}</p>
  </Bar>
}

const Bar = styled.section`

display: flex;
justify-content: space-between;

padding: .5rem;
`