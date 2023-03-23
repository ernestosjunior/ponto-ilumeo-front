import { defaultTheme } from "@/styles/themes";
import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 41px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(217, 217, 217, 0.05);
  border-radius: 4px;
  padding: 13px;

  .field {
    font-style: normal;
    font-size: 12px;
    line-height: 15px;
    font-weight: ${defaultTheme.fontWeights.regular};
    color: ${defaultTheme.colors.lightGray};
  }
  .bold {
    font-weight: ${defaultTheme.fontWeights.bold};
  }
`;
