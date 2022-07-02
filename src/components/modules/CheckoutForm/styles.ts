import css from "styled-jsx/css";

import { colors, sizes } from "../../../styles/theme";

export const styles = css`
  form {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .container {
    padding: 3rem 2.4rem;
    border-radius: 8px;
  }

  .container:nth-child(2) {
    display: flex;
    flex-direction: column;
  }

  h1 {
    margin-bottom: 3.2rem;
  }

  .fieldsets-container {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
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

  h2 {
    margin-bottom: 3.2rem;
    font-size: 1.8rem;
    letter-spacing: 1.3px;
  }

  .rate,
  .total-rate {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.8rem;
  }

  .rate span:first-child,
  .total-rate span:first-child {
    text-transform: uppercase;
    opacity: 0.5;
  }

  .rate span:nth-child(2),
  .total-rate span:nth-child(2) {
    font-size: 1.8rem;
    font-weight: 700;
  }

  .total-rate {
    margin-block: 2.4rem 3.2rem;
  }

  @media screen and (min-width: 600px) {
    .container {
      padding: 3rem 2.8rem;
    }

    h1 {
      margin-bottom: 4rem;
    }
  }

  @media screen and (min-width: 1440px) {
    form {
      flex-direction: row;
      align-items: flex-start;
      gap: 3rem;
    }

    .container:first-child {
      flex: 2;
      padding: 5.4rem 4.8rem 4.8rem;
    }

    .container:nth-child(2) {
      flex: 1;
      padding: 3.2rem;
    }
  }
`;

export const dynamicStyles = css`
  .container {
    background-color: ${colors.white};
  }

  h1 {
    font-size: ${sizes.mobile.text.h3};
  }

  legend {
    color: ${colors.primary};
  }

  .total-rate span:nth-child(2) {
    color: ${colors.primary};
  }
`;
