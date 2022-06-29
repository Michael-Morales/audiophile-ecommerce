import css from "styled-jsx/css";

import { colors } from "../../../styles/theme";

export const styles = css`
  .container {
    position: absolute;
    top: 24px;
    right: 24px;
    padding: 3.2rem 2.8rem;
    width: calc(100% - 24px * 2);
    max-width: 377px;
    border-radius: 8px;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3.2rem;
  }

  .header p {
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 1.3px;
    text-transform: uppercase;
  }

  .header button {
    padding: 0;
    background-color: unset;
    border: unset;
    text-decoration: underline;
    opacity: 0.5;
    cursor: pointer;
    transition: ease 0.3s;
  }

  .header button::first-letter {
    text-transform: uppercase;
  }

  .header button:hover {
    opacity: 1;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.4rem;
  }

  .footer p:first-child {
    text-transform: uppercase;
    opacity: 0.5;
  }

  .price {
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

export const dynamicStyles = css`
  .container {
    background-color: ${colors.white};
  }

  .header button:hover {
    color: ${colors.primary};
  }
`;
