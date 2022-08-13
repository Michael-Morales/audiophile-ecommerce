import css from "styled-jsx/css";

export const styles = css`
  section {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-block: 4rem 12rem;
  }

  @media screen and (min-width: 600px) {
    section {
      flex-direction: row;
      gap: 1rem;
      margin-block: 9.6rem;
    }
  }

  @media screen and (min-width: 1240px) {
    section {
      gap: 3rem;
      margin-block: 12rem;
    }
  }
`;
