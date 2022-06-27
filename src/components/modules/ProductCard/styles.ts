import css from "styled-jsx/css";

import { colors, sizes } from "../../../styles/theme";

export const styles = css`
  article {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .img-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 8px;
    overflow: hidden;
  }

  .overline {
    text-transform: uppercase;
  }

  h1 {
    max-width: 300px;
  }

  .description {
    opacity: 0.5;
  }

  .price {
    margin-bottom: 3.2rem;
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 1.3px;
  }

  .overline,
  h1,
  .description {
    margin-bottom: 2.4rem;
  }

  .add-to-cart {
    display: flex;
    gap: 1.6rem;
  }

  @media screen and (min-width: 600px) {
    article {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 5%;
    }

    .img-wrapper {
      flex: 0.4;
      height: 480px;
    }

    .content {
      flex: 0.6;
    }

    .overline {
      margin-bottom: 1.6rem;
    }

    h1,
    .description {
      margin-bottom: 3.2rem;
    }
  }

  @media screen and (min-width: 1240px) {
    article {
      gap: 10%;
    }

    .img-wrapper {
      flex: 1;
      height: 560px;
    }

    .content {
      flex: 1;
    }

    .price {
      margin-bottom: 4.8rem;
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

  h1 {
    font-size: ${sizes.mobile.text.h3};
    line-height: ${sizes.mobile.lineHeight.h3};
    letter-spacing: ${sizes.mobile.letterSpacing.h3};
  }

  @media screen and (min-width: 1240px) {
    h1 {
      font-size: ${sizes.desktop.text.h2};
      line-height: ${sizes.desktop.lineHeight.h2};
      letter-spacing: ${sizes.desktop.letterSpacing.h2};
    }
  }
`;
