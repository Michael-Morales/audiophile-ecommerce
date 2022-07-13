import css from "styled-jsx/css";

import { colors, sizes } from "../../../styles/theme";

export const styles = css`
  .container {
    position: fixed;
    top: calc(9rem + 2.4rem);
    left: 50%;
    transform: translateX(-50%);
    padding: 2.4rem;
    width: calc(100% - 2.4rem * 2);
    max-width: 540px;
    max-height: calc(100vh - 9rem - 4.8rem);
    border-radius: 8px;
    z-index: 9999;
    overflow-y: auto;
  }

  h2 {
    margin-block: 2.4rem 1.6rem;
    line-height: 2.8rem;
  }

  p {
    margin-bottom: 2.4rem;
    opacity: 0.5;
  }

  @media screen and (min-width: 600px) {
    .container {
      padding: 4.8rem;
    }

    h2 {
      margin-block: 3.2rem 2.4rem;
    }

    p {
      margin-bottom: 3.2rem;
    }
  }
`;

export const dynamicStyles = css`
  .container {
    background-color: ${colors.white};
  }

  h2 {
    font-size: ${sizes.mobile.text.h4};
  }

  @media screen and (min-width: 600px) {
    h2 {
      font-size: ${sizes.desktop.text.h3};
      line-height: ${sizes.desktop.lineHeight.h3};
    }
  }
`;
