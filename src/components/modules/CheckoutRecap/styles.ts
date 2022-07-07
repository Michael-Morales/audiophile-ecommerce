import css from "styled-jsx/css";

import { colors } from "../../../styles/theme";

export const styles = css`
  .container {
    margin-bottom: 2.4rem;
    border-radius: 8px;
    overflow: hidden;
  }

  .items {
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
`;
