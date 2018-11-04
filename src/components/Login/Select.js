import React from 'react'
import styled from 'styled-components'
import arrows from '../../images/arrows.svg'

const LanguageSelect = styled.select`
  background: white url(${arrows}) no-repeat 97% 0 !important;
  border: 1px solid gray;
  border-radius: 3px;
  padding: 0.25em 0.75em 0.25em 0.25em;
  cursor: pointer;
  margin: 0 1rem 0 0;
`

const Select = props => {
  return (
    <LanguageSelect onChange={props.handleChange}>
      {props.languages.map((language, index) => (
        <option key={index} value={language.code}>
          {language.title}
        </option>
      ))}
    </LanguageSelect>
  )
}

export default Select
