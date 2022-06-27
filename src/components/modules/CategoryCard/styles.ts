import css from "styled-jsx/css";

import { colors, sizes } from "../../../styles/theme";

export const styles = css`
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
  }

  .img-wrapper {
    position: absolute;
    left: 50%;
    background-color: transparent;
    transform: translateX(-50%);
  }

  h3 {
    margin-top: auto;
  }

  @media screen and (min-width: 600px) {
    .container {
      flex: 1;
    }
  }
`;

export const dynamicStyles = css`
  div {
    background-color: ${colors.grey};
  }

  h3 {
    font-size: ${sizes.mobile.text.h6};
    line-height: ${sizes.mobile.lineHeight.h6};
    letter-spacing: ${sizes.mobile.letterSpacing.h6};
  }
`;
