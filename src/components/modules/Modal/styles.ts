import css from "styled-jsx/css";

import { colors } from "../../../styles/theme";

export const styles = css`
  .overlay {
    position: fixed;
    inset: 0;
    margin-top: 9rem;
    z-index: 998;
  }

  @media screen and (min-width: 1240px) {
    .overlay {
      margin-top: 9.6rem;
    }
  }
`;

export const dynamicStyles = css`
  .overlay {
    background-color: ${colors.secondaryButton};
  }
`;
