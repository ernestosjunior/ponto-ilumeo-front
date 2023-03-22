import { defaultTheme } from "@/styles/themes";
import styled from "styled-components";

export const Container = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 46px;

  .logo {
    display: flex;
    align-items: center;
    width: 365px;
    color: ${defaultTheme.colors.mediumGray};
    font-weight: 400;
    font-size: 21.5172px;
    line-height: 26px;

    > strong {
      margin-left: 8px;
    }
  }

  .form {
    max-width: 365px;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 24px;
  }
`;
