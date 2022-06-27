import css from "styled-jsx/css";

import { colors, sizes } from "../../../styles/theme";

export const styles = css`
  section {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-block: 12rem;
  }

  .img-container {
    border-radius: 8px;
    overflow: hidden;
  }

  .img-wrapper {
    position: relative;
    height: 300px;
  }

  .content {
    align-self: center;
    text-align: center;
  }

  h2 {
    margin-bottom: 3.2rem;
  }

  p {
    opacity: 0.5;
  }

  @media screen and (min-width: 600px) {
    section {
      gap: 6.3rem;
    }

    .content {
      width: 80%;
    }
  }

  @media screen and (min-width: 1240px) {
    section {
      flex-direction: row;
      gap: 3rem;
      margin-block: 16rem;
    }

    .img-container {
      flex: 50%;
      order: 2;
    }

    .img-wrapper {
      height: 588px;
    }

    .content {
      flex: 50%;
      text-align: left;
    }

    h2,
    p {
      max-width: 445px;
    }
  }
`;

export const dynamicStyles = css`
  span {
    color: ${colors.primary};
  }

  h2 {
    font-size: ${sizes.mobile.text.h3};
    line-height: ${sizes.mobile.lineHeight.h3};
    letter-spacing: ${sizes.mobile.letterSpacing.h3};
  }

  @media screen and (min-width: 600px) {
    h2 {
      font-size: ${sizes.desktop.text.h2};
      line-height: ${sizes.desktop.lineHeight.h2};
      letter-spacing: ${sizes.desktop.letterSpacing.h2};
    }
  }
`;
