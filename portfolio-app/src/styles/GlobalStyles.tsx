import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  a {
  color: inherit; 
  text-decoration: inherit; 
}

  ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

button {
  background: none;
  border: none;
  padding: 0;
  color: inherit;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

  body {
    margin: 0;
    font-family: system-ui, sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.font};
  }
`;
