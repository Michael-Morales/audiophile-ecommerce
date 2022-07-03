import css from "styled-jsx/css";

import { colors } from "../../../styles/theme";

export const styles = css`
  .container {
    position: fixed;
    top: 24px;
    right: 24px;
    padding: 3.2rem 2.8rem;
    margin-top: 9rem;
    width: calc(100% - 24px * 2);
    max-width: 377px;
    max-height: calc(100vh - 9rem - 3.2rem - 2.4rem);
    border-radius: 8px;
    z-index: 9999;
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

  .empty {
    display: flex;
    justify-content: center;
    margin-bottom: 3.2rem;
    letter-spacing: 1.3px;
    text-transform: uppercase;
    opacity: 0.5;
  }

  ul {
    max-height: calc(100vh - 403px);
    overflow-y: auto;
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

  @media screen and (min-width: 600px) {
    .container {
      right: 4rem;
      padding: 3.2rem;
    }
  }

  @media screen and (min-width: 905px) {
    .container {
      right: calc((100% - 840px) / 2);
    }
  }

  @media screen and (min-width: 1240px) {
    .container {
      right: 200px;
    }
  }

  @media screen and (min-width: 1440px) {
    .container {
      right: calc((100% - 1110px) / 2);
    }
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
