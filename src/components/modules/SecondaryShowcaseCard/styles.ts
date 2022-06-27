import css from "styled-jsx/css";

import { sizes } from "../../../styles/theme";

export const styles = css`
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 3.2rem;
    padding: 0 2.4rem;
    height: 320px;
    border-radius: 8px;
    overflow: hidden;
  }

  .img-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  @media screen and (min-width: 600px) {
    .container {
      padding-left: 6.2rem;
    }
  }

  @media screen and (min-width: 1240px) {
    .container {
      padding-left: 9.5rem;
    }
  }
`;

export const dynamicStyles = css`
  h2 {
    font-size: ${sizes.mobile.text.h3};
    line-height: ${sizes.mobile.lineHeight.h3};
    letter-spacing: ${sizes.mobile.letterSpacing.h3};
  }
`;
