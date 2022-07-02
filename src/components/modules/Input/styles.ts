import css from "styled-jsx/css";

import { colors } from "../../../styles/theme";

export const styles = css`
  label {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  label div {
    display: flex;
    justify-content: space-between;
  }

  label span {
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
    border-radius: 8px;
    border-width: 1px;
    border-style: solid;
    outline: none;
  }
`;

export const dynamicStyles = css`
  .error {
    color: ${colors.error};
  }

  input:focus {
    border-color: ${colors.primary};
  }
`;
