import css from "styled-jsx/css";

import { colors } from "../../../styles/theme";

export const styles = css`
  .container {
    display: flex;
    flex-direction: column;
    gap: 5.6rem;
  }

  fieldset {
    padding: 0;
    border: none;
  }

  legend {
    margin-bottom: 1.6rem;
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 2.5rem;
    text-transform: uppercase;
  }

  .inputs-container {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
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

  @media screen and (min-width: 600px) {
    .inputs-container {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1.6rem;
    }

    fieldset:nth-child(2) label:first-child {
      grid-column: 1 / 3;
    }
  }
`;

export const dynamicStyles = css`
  legend {
    color: ${colors.primary};
  }

  input {
    border-color: ${colors.inputBorder};
  }

  input:focus {
    border-color: ${colors.primary};
  }
`;
