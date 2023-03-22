import { defaultTheme } from "@/styles/themes";
import styled from "styled-components";

export const Input = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 4px;
  background: ${defaultTheme.colors.gray};
  display: flex;
  flex-direction: column;
  padding: 7px 17px;
  row-gap: 4px;

  .label {
    color: ${defaultTheme.colors.white};
    font-weight: ${defaultTheme.fontWeights.extraLight};
    font-size: 12px;
  }
  .input {
    border: unset;
    outline: none;
    background: transparent;
    flex: 1;
    font-size: 21px;
    color: ${defaultTheme.colors.white};
    font-weight: ${defaultTheme.fontWeights.semibold};
  }
`;
