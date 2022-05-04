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
    background-color: transparent;
  }

  body {
    background-color: #09090a;
    color: #f0f0f0;
  }
`;
