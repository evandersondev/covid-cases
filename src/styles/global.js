import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body{
    width: 100%;
    height: 100vh;
    font-size: 62.5%;
  }
  body{
    font-family: 'Nunito', sans-serif;
    font-size: 1.6rem;
    color: #333333;
    background: #f5f5f5;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  
  a{
    text-decoration: none;
  }
  button{
    font-family: 'Nunito', sans-serif;
  }
`
