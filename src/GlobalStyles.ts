import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  body {
    background-color: gray;
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
