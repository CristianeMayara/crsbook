import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Helvetica, Arial, sans-serif;
  }
`;

export default GlobalStyle;
