import css from "styled-jsx/css";

import { colors } from "../../../styles/theme";

export const styles = css`
  div {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    min-width: 120px;
  }

  button {
    padding: 0 0.8rem;
    background-color: unset;
    opacity: 0.25;
    border: unset;
    outline: none;
    cursor: pointer;
    transition: ease 0.3s;
  }

  button:hover {
    opacity: 1;
  }
`;

export const dynamicStyles = css`
  div {
    background-color: ${colors.grey};
  }

  button:hover {
    color: ${colors.primary};
  }
`;
