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
`;

export const dynamicStyles = css`
  .items {
    background-color: ${colors.grey};
  }

  .footer {
    background-color: ${colors.dark};
  }
`;
