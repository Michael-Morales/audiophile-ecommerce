import css from "styled-jsx/css";

import { colors } from "../../../styles/theme";

export const styles = css`
  .container {
    display: flex;
    align-items: center;
  }

  .img-wrapper {
    position: relative;
    width: 64px;
    height: 64px;
    border-radius: 8px;
    overflow: hidden;
  }

  .informations {
    margin-inline: 1.6rem auto;
  }

  .informations a {
    font-weight: 700;
    text-decoration: none;
  }

  .price {
    font-size: 1.4rem;
    font-weight: 700;
    opacity: 0.5;
  }
`;

export const dynamicStyles = css`
  .informations a {
    color: ${colors.black};
  }
`;
