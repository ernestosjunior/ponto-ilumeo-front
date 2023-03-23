import { defaultTheme } from "@/styles/themes";
import styled from "styled-components";

export const Container = styled.section`
  height: calc(100% - 85px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  row-gap: 46px;
  padding-top: 85px;

  .top {
    width: 365px;
    display: flex;
    flex-direction: column;
    row-gap: 19px;

    @media (max-width: 480px) {
      width: 340px;
    }
  }

  .user {
    display: flex;
    justify-content: space-between;

    .title {
      font-weight: ${defaultTheme.fontWeights.bold};
      font-size: 11.6px;
      line-height: 14px;
      color: ${defaultTheme.colors.lightGray};
    }

    .label {
      font-weight: ${defaultTheme.fontWeights.extraLight};
      font-size: 12px;
      line-height: 15px;
      color: rgba(207, 207, 207, 0.69);
    }

    > div {
      text-align: end;
    }
  }

  .bottom {
    width: 365px;
    display: flex;
    flex-direction: column;
    row-gap: 19px;

    @media (max-width: 480px) {
      width: 340px;
    }

    .title {
      color: ${defaultTheme.colors.lightGray};
      font-weight: ${defaultTheme.fontWeights.bold};
      font-size: 12px;
      line-height: 15px;
    }

    .scroll {
      display: flex;
      flex-direction: column;
      row-gap: 8px;
    }
  }
`;
