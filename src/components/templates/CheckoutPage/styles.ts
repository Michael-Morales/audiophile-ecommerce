import css from "styled-jsx/css";

import { colors } from "../../../styles/theme";

export const styles = css`
  main {
    padding: calc(9rem + 1.6rem) 0 9.8rem;
  }

  @media screen and (min-width: 600px) {
    main {
      padding: calc(9rem + 4.8rem) 0 12rem;
    }
  }

  @media screen and (min-width: 1440px) {
    main {
      padding: calc(9rem + 8rem) 0 14rem;
    }
  }
`;

export const dynamicStyles = css`
  main {
    background-color: ${colors.light};
  }
`;
