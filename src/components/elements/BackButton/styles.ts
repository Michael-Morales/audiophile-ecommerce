import css from "styled-jsx/css";

import { colors } from "../../../styles/theme";

export const styles = css`
  button {
    display: block;
    padding: 0;
    margin-bottom: 2.4rem;
    background-color: unset;
    border: unset;
    outline: none;
    text-transform: capitalize;
    opacity: 0.5;
    cursor: pointer;
    transition: ease 0.3s;
  }

  button:hover {
    opacity: 1;
  }

  @media screen and (min-width: 1240px) {
    button {
      margin-bottom: 5.6rem;
    }
  }
`;

export const dynamicStyles = css`
  button:hover {
    color: ${colors.primary};
  }
`;
