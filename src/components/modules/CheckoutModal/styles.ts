import css from "styled-jsx/css";

import { colors, sizes } from "../../../styles/theme";

export const styles = css`
  .container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2.4rem;
    width: calc(100% - 2.4rem * 2);
    max-width: 540px;
    border-radius: 8px;
    z-index: 9999;
  }

  h2 {
    margin-block: 2.4rem 1.6rem;
    line-height: 2.8rem;
  }

  p {
    margin-bottom: 2.4rem;
    opacity: 0.5;
  }
`;

export const dynamicStyles = css`
  .container {
    background-color: ${colors.white};
  }

  h2 {
    font-size: ${sizes.mobile.text.h4};
  }
`;
