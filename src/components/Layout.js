import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {children}
        <GlobalStyle />
      </div>
    </ThemeProvider>
  )
}

export default Layout
