import { defaultTheme } from "@/styles/themes";
import styled from "styled-components";

export const Container = styled.div`
  .time {
    font-weight: ${defaultTheme.fontWeights.bold};
    font-size: 23.2px;
    line-height: 28px;
    color: ${defaultTheme.colors.lightGray};
  }

  .label {
    font-weight: ${defaultTheme.fontWeights.bold};
    font-size: 11.6px;
    line-height: 14px;
    color: ${defaultTheme.colors.lightGray};
  }
`;
