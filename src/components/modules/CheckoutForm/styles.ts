import css from "styled-jsx/css";

import { colors, sizes } from "../../../styles/theme";

export const styles = css`
  .container {
    padding: 3rem 2.4rem;
    border-radius: 8px;
  }

  h1 {
    margin-bottom: 3.2rem;
  }

  form {
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
`;
