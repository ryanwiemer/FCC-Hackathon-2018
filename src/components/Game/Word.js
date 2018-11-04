import React from 'react'
import Overdrive from 'react-overdrive'
import styled from 'styled-components'

export default props => (
    <Overdrive id="word">
        <Word>
            {props.children}
        </Word>
    </Overdrive>
)

const Word = styled.div`
font-size: 2rem;
text-align: center;
width: 100vw;
`