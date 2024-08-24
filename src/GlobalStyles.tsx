import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 @font-face {
    font-family: 'SUIT-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  * {
    margin: 0px;
    padding: 0;
    box-sizing: border-box;
    
  }
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #000000;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;