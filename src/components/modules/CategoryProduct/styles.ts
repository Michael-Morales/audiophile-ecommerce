import css from "styled-jsx/css";

import { colors, sizes } from "../../../styles/theme";

export const styles = css`
  article {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    margin-bottom: 12rem;
  }

  .img-wrapper {
    position: relative;
    height: 352px;
    border-radius: 8px;
    overflow: hidden;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .overline {
    text-transform: uppercase;
  }

  h2 {
    max-width: 360px;
  }

  .description {
    max-width: 570px;
    opacity: 0.5;
  }

  .overline,
  h2,
  .description {
    margin-bottom: 2.4rem;
  }

  @media screen and (min-width: 600px) {
    article {
      gap: 5.2rem;
    }

    .overline {
      margin-bottom: 1.6rem;
    }

    h2 {
      margin-bottom: 3.2rem;
    }
  }

  @media screen and (min-width: 1240px) {
    article {
      flex-direction: row;
      justify-content: space-between;
      gap: 3rem;
      margin-bottom: 16rem;
    }

    .img-wrapper {
      flex: 1;
      height: 560px;
      max-width: 540px;
    }

    .content {
      flex: 1;
      align-items: flex-start;
      justify-content: center;
      max-width: 445px;
      text-align: left;
    }

    .description {
      margin-bottom: 4rem;
    }
  }
`;

export const dynamicStyles = css`
  .overline {
    color: ${colors.primary};
    font-size: ${sizes.mobile.text.overline};
    line-height: ${sizes.mobile.lineHeight.overline};
    letter-spacing: ${sizes.mobile.letterSpacing.overline};
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
