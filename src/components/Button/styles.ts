import { defaultTheme } from "@/styles/themes";
import styled from "styled-components";

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  width: 100%;
  color: ${defaultTheme.colors.gray};
  background: ${defaultTheme.colors.orangeGrandient};
  text-align: center;
  font-weight: ${defaultTheme.fontWeights.bold};
  border-radius: 4px;
  height: 47px;

  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
