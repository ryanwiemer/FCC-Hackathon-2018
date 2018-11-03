import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Menu from '../components/Menu'

class Layout extends React.Component {
  constructor() {
    super()
    this.state = { loaded: false }
  }

  componentDidMount() {
    this.setState({ loaded: true })
  }

  render() {
    const props = this.props
    const children = this.props.children
    const { loaded } = this.state

    return (
      <ThemeProvider theme={theme}>
        <div className={`${loaded ? ' loaded' : 'initial'}`}>
          <Menu />

          {children}

          <GlobalStyle />
        </div>
      </ThemeProvider>
    )
  }
}

export default Layout
