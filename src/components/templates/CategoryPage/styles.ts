import css from "styled-jsx/css";

import { colors, sizes } from "../../../styles/theme";

export const styles = css`
  h1 {
    padding: calc(9rem + 3.2rem) 0 3.2rem;
    margin-bottom: 6.4rem;
    text-align: center;
  }

  @media screen and (min-width: 600px) {
    h1 {
      padding: calc(9rem * 2) 0 9rem;
      margin-bottom: 12rem;
    }
  }

  @media screen and (min-width: 1240px) {
    h1 {
      margin-bottom: 16rem;
    }
  }
`;

export const dynamicStyles = css`
  h1 {
    font-size: ${sizes.desktop.text.h3};
    line-height: ${sizes.desktop.lineHeight.h3};
    letter-spacing: ${sizes.desktop.letterSpacing.h3};
    color: ${colors.white};
    background-color: ${colors.dark};
  }

  @media screen and (min-width: 600px) {
    h1 {
      font-size: ${sizes.desktop.text.h2};
      line-height: ${sizes.desktop.lineHeight.h2};
      letter-spacing: ${sizes.desktop.letterSpacing.h2};
    }
  }
`;
