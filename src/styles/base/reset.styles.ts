import { createGlobalStyle } from "styled-components";

export const ResetStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button, link, input[type="submit"] {
    cursor: pointer;
  }

  body {
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    font-family: 'Montserrat', sans-serif;

    background-color: ${(props) => props.theme.colors.primary};
  }

  #__next{
    width: 100%;
    height: 100vh;
  }
`;
