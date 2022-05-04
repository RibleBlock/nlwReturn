import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
  }

  body, input, button, :root {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
    background-color: transparent;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.surface_primary};
    color: ${({ theme }) => theme.COLORS.text_primary};
  }
`;
