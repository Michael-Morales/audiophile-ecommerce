import css from "styled-jsx/css";

export const styles = css`
  section {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    margin-block: 9.6rem;
  }

  @media screen and (min-width: 600px) {
    section {
      gap: 3.2rem;
    }
  }

  @media screen and (min-width: 1240px) {
    section {
      gap: 4.8rem;
    }
  }
`;
