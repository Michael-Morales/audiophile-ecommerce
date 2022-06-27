import css from "styled-jsx/css";

import { colors } from "./theme";

export const styles = css`
  svg {
    cursor: pointer;
  }

  svg:hover path {
    transition: fill ease 0.3s;
  }
`;

export const dynamicStyles = css`
  svg:hover path {
    fill: ${colors.primary};
  }
`;
