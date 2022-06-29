import css from "styled-jsx/css";

import { colors } from "../../../styles/theme";

export const styles = css`
  label {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }

  span {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1;
    text-transform: capitalize;
  }

  input {
    padding: 1.8rem 2.4rem;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1;
    border-width: 1px;
    border-style: solid;
    border-radius: 8px;
  }
`;

export const dynamicStyles = css`
  input {
    border-color: ${colors.inputBorder};
  }

  input:focus {
    border-color: ${colors.primary};
    outline: none;
  }
`;
