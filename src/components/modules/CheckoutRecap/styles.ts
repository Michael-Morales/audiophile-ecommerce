import css from "styled-jsx/css";

import { colors } from "../../../styles/theme";

export const styles = css`
  .container {
    display: flex;
    flex-direction: column;
    margin-bottom: 2.4rem;
    border-radius: 8px;
    overflow: hidden;
  }

  .items {
    display: flex;
    flex-direction: column;
    padding: 2.4rem;
  }

  .footer {
    padding: 1.6rem 2.4rem;
  }

  .footer p {
    font-size: 1.8rem;
    font-weight: 700;
  }

  .footer p:first-child {
    margin-bottom: 0.8rem;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    opacity: 0.5;
  }

  ul {
    gap: 1.6rem;
    margin-bottom: 0;
  }

  button {
    padding-top: 1.2rem;
    margin-top: 1.6rem;
    font-size: 1.2rem;
    font-weight: 700;
    background-color: unset;
    border: none;
    border-top-width: 1px;
    border-top-style: solid;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
  }

  @media screen and (min-width: 600px) {
    .container {
      flex-direction: row;
      margin-bottom: 4.8rem;
    }

    .items {
      flex: 0.6;
    }

    .footer {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      flex: 0.4;
      padding: 3.2rem;
    }
  }
`;

export const dynamicStyles = css`
  .items {
    background-color: ${colors.grey};
  }

  .footer {
    background-color: ${colors.dark};
  }

  .footer p {
    color: ${colors.white};
  }

  button {
    border-color: ${colors.secondaryButton};
  }
`;
