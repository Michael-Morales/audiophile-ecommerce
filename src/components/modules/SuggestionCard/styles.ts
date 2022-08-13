import css from "styled-jsx/css";

import { sizes } from "../../../styles/theme";

export const styles = css`
  .container {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    width: 100%;
  }

  .img-wrapper {
    position: relative;
    height: 120px;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;
  }

  p {
    font-weight: 700;
  }

  @media screen and (min-width: 600px) {
    .container {
      gap: 4rem;
    }

    .img-wrapper {
      height: 318px;
    }
  }
`;

export const dynamicStyles = css`
  p {
    font-size: ${sizes.mobile.text.h4};
    letter-spacing: ${sizes.mobile.letterSpacing.h4};
  }
`;
