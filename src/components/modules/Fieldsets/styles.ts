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

  label div {
    display: flex;
    justify-content: space-between;
  }

  label span,
  .radio-container span {
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

  .radio-container,
  .radio-options {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .radio-options label {
    flex-direction: row;
    align-items: center;
    gap: 1.6rem;
    padding: 1.8rem;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1;
    text-transform: capitalize;
    border-width: 1px;
    border-style: solid;
    border-radius: 8px;
    cursor: pointer;
    transition: ease 0.3s;
  }

  input[type="radio"] {
    display: flex;
    justify-content: center;
    align-items: center;
    appearance: none;
    padding: 0;
    width: 2rem;
    height: 2rem;
    border-width: 1px;
    border-style: solid;
    border-radius: 50%;
  }

  input[type="radio"]::before {
    content: "";
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    transform: scale(0);
    transition: transform ease 0.15s;
  }

  input[type="radio"]:checked::before {
    transform: scale(1);
  }

  .cash-on-delivery {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
  }

  .cash-on-delivery p {
    opacity: 0.5;
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

    .radio-container {
      grid-column: 1 / 3;
      flex-direction: row;
      justify-content: space-between;
    }

    .radio-container span,
    .radio-options {
      flex: 1;
    }

    .cash-on-delivery {
      grid-column: 1 / 3;
      flex-direction: row;
      gap: 3.2rem;
    }

    .cash-on-delivery > * {
      flex: 1;
    }
  }
`;

export const dynamicStyles = css`
  legend {
    color: ${colors.primary};
  }

  .error {
    color: ${colors.error};
  }

  input,
  .radio-options label {
    border-color: ${colors.inputBorder};
  }

  input:focus,
  .radio-options label:hover {
    border-color: ${colors.primary};
  }

  .radio-options input {
    background-color: ${colors.white};
    border-color: ${colors.inputBorder};
  }

  input[type="radio"]::before {
    background-color: ${colors.primary};
  }
`;
