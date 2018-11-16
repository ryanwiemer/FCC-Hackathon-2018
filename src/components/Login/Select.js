import React from 'react'
import styled from 'styled-components'
import arrows from '../../images/arrows.svg'

const LanguageSelect = styled.select`
  display: inline-block;
  text-align: center;
  position: relative;
  background: #eee url(${arrows}) no-repeat 97% 0 !important;
  border-radius: 3px;
  padding: 0.25em 4em 0.25em 0.5em;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  margin: 0 1rem 0 0;
`

const Select = props => {
  return (
    <LanguageSelect value={props.currentLanguage} onChange={props.handleChange}>
      {props.languages.map((language, index) => (
        <option key={index} value={language.code}>
          {language.title}
        </option>
      ))}
    </LanguageSelect>
  )
}

export default Select
