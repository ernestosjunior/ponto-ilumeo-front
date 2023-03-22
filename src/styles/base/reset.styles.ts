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
    font-family: 'Montserrat', sans-serif;

    background-color: ${(props) => props.theme.colors.primary};
  }
`;
