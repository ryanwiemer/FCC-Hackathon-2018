import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import SEO from './SEO'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {children}
        <GlobalStyle />
        <SEO />
      </div>
    </ThemeProvider>
  )
}

export default Layout
