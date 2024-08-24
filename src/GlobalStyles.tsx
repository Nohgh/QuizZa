import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
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