import css from "styled-jsx/css";

import { colors, sizes } from "../../../styles/theme";

export const styles = css`
  div {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 0;
  }

  li {
    display: flex;
    gap: 2.4rem;
  }

  .quantity {
    font-weight: 700;
  }

  .item {
    text-transform: capitalize;
    opacity: 0.5;
  }

  @media screen and (min-width: 600px) {
    div {
      flex-direction: row;
      justify-content: space-between;
    }

    h2,
    ul {
      flex: 1;
    }
  }

  @media screen and (min-width: 1240px) {
    div {
      flex-direction: column;
      justify-content: flex-start;
      gap: 3.2rem;
      flex: 1;
    }

    h2,
    ul {
      flex: unset;
    }
  }
`;

export const dynamicStyles = css`
  h2 {
    font-size: ${sizes.mobile.text.h4};
  }

  .quantity {
    color: ${colors.primary};
  }

  @media screen and (min-width: 600px) {
    h2 {
      font-size: ${sizes.desktop.text.h3};
      line-height: ${sizes.desktop.lineHeight.h3};
      letter-spacing: ${sizes.desktop.letterSpacing.h3};
    }
  }
`;
