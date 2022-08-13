import css from "styled-jsx/css";

import { colors } from "../../../styles/theme";

export const styles = css`
  a {
    display: inline-block;
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 2.5rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
    transition: color ease 0.3s;
  }
`;

export const dynamicStyles = css`
  a {
    color: ${colors.white};
  }

  a:hover {
    color: ${colors.primary};
  }
`;
