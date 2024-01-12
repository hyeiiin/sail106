import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding-top: 160px;
  }
  button {
    border: 0;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyles;