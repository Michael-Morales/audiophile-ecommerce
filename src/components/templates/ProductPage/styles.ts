import css from "styled-jsx/css";

import { sizes } from "../../../styles/theme";

export const styles = css`
  main {
    margin-top: calc(9rem + 1.6rem);
  }

  .features {
    margin-block: 8.8rem;
  }

  h2 {
    margin-bottom: 2.4rem;
  }

  p {
    opacity: 0.5;
    white-space: pre-wrap;
  }

  @media screen and (min-width: 600px) {
    main {
      margin-top: calc(9rem + 3.2rem);
    }

    .features {
      margin-block: 12rem;
    }

    h2 {
      margin-bottom: 3.2rem;
    }
  }

  @media screen and (min-width: 1240px) {
    main {
      margin-top: calc(9rem + 8rem);
    }

    .features {
      flex: 2;
      margin-block: unset;
    }

    .features-container {
      display: flex;
      justify-content: space-between;
      gap: 10%;
      margin-block: 16rem;
    }
  }
`;

export const dynamicStyles = css`
  h2 {
    font-size: ${sizes.mobile.text.h4};
  }

  @media screen and (min-width: 600px) {
    h2 {
      font-size: ${sizes.desktop.text.h3};
      line-height: ${sizes.desktop.lineHeight.h3};
      letter-spacing: ${sizes.desktop.letterSpacing.h3};
    }
  }
`;
