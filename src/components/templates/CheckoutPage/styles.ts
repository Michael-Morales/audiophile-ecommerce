import css from "styled-jsx/css";

import { colors } from "../../../styles/theme";

export const styles = css`
  main {
    padding: calc(9rem + 1.6rem) 0 9.8rem;
  }
`;

export const dynamicStyles = css`
  main {
    background-color: ${colors.light};
  }
`;
