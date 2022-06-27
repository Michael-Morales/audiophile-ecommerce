import css from "styled-jsx/css";

import { colors, sizes } from "../../../styles/theme";

export const styles = css`
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 9rem;
    height: 100vh;
    text-align: center;
  }

  .img-wrapper {
    position: absolute;
    inset: 0;
    z-index: -1;
  }

  .overline {
    margin-bottom: 1.6rem;
    font-weight: 400;
    text-transform: uppercase;
    opacity: 0.5;
  }

  h1 {
    margin-bottom: 2.4rem;
    max-width: 400px;
  }

  .subtitle {
    margin-bottom: 2.8rem;
    max-width: 350px;
    font-weight: 400;
    opacity: 0.75;
  }

  @media screen and (min-width: 600px) {
    .overline {
      margin-bottom: 2.4rem;
    }

    .subtitle {
      margin-bottom: 4rem;
    }
  }

  @media screen and (min-width: 1240px) {
    .container {
      align-items: flex-start;
      padding-top: 9.6rem;
      text-align: left;
    }
  }
`;

export const dynamicStyles = css`
  div {
    color: ${colors.white};
  }

  .overline {
    font-size: ${sizes.mobile.text.overline};
    line-height: ${sizes.mobile.lineHeight.overline};
    letter-spacing: ${sizes.mobile.letterSpacing.overline};
  }
`;
