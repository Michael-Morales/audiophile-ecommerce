import css from "styled-jsx/css";

import { colors, sizes } from "../../../styles/theme";

export const styles = css`
  .container {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .img-wrapper {
    position: relative;
    height: 200px;
    border-radius: 8px;
    overflow: hidden;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 3.2rem;
    padding: 0 2.4rem;
    height: 200px;
    border-radius: 8px;
  }

  @media screen and (min-width: 600px) {
    .container {
      flex-direction: row;
      gap: 1rem;
    }

    .img-wrapper {
      flex: 50%;
      height: 320px;
    }

    .content {
      flex: 50%;
      padding: 0 4rem;
      height: 320px;
    }

    h3 {
      font-size: 2.8rem;
    }
  }

  @media screen and (min-width: 1240px) {
    .container {
      gap: 3rem;
    }

    .content {
      padding-left: 9.5rem;
    }
  }
`;

export const dynamicStyles = css`
  .content {
    background-color: ${colors.grey};
  }

  h2 {
    font-size: ${sizes.mobile.text.h3};
    line-height: ${sizes.mobile.lineHeight.h3};
    letter-spacing: ${sizes.mobile.letterSpacing.h3};
  }
`;
