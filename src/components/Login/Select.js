import React from 'react'
import styled from 'styled-components'

const LanguageSelect = styled.select`
  position: relative;
  background: ${props => props.theme.colors.primary};
  border-radius: 3px;
  padding: 0.25em 0.75em 0.25em 0.5em;
  color: white;
  cursor: pointer;
  margin: 0 1rem 0 0;
  &:after {
  }
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
