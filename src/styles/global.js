import { createGlobalStyle } from 'styled-components'
import theme from '../styles/theme'

const GlobalStyle = createGlobalStyle`
  /* stylelint-disable */
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: primaryline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    min-height: 0;
    min-width: 0;
	  box-sizing: border-box;
  }

  /* Site Specific Globals */
  html,
  body {
    height: 100%;
    font-weight: normal;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }

  body {
    color: ${theme.colors.primary};
    line-height: 1;
    font-variant-ligatures: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    margin: 0;
  }

  h1,h2,h3,h4,h4,h6 {
    font-family: sofia-pro, -apple-system, Helvetica, Roboto, Arial, sans-serif;
  }

  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.primary};
  }

  button,
  input,
  textarea,
  select {
    color: ${theme.colors.primary};
    font-family: inherit;
    font-size: inherit;
    background: none;
    border: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 0;
    resize: none;
    &:invalid {
      box-shadow: none;
    }
  }

  body:not(.user-is-tabbing) button:focus,
  body:not(.user-is-tabbing) input:focus,
  body:not(.user-is-tabbing) select:focus,
  body:not(.user-is-tabbing) textarea:focus {
    outline: none;
  }

  ::-webkit-input-placeholder {
    color: gray;
  }

  ::-moz-placeholder {
    color: gray; opacity: 1;
  }

  :-ms-input-placeholder {
    color: gray;
  }

  :-moz-placeholder {
    color: gray; opacity: 1;
  }

  select:invalid, select option[value=''] {
    color: gray !important;
  }

  /* Nprogress */
  .nprogress-busy {
    cursor: wait;
  }

  #nprogress .peg {
    display: none !important;
  }

  #nprogress .bar {
    height: 4px !important;
  }

  /* Mounting the Layout component */

  #content {
    visibility: hidden;
  }
  .loaded {
    #content {
      visibility: visible !important;
    }
  }

`
export default GlobalStyle
