import css from "styled-jsx/css";

export const styles = css`
  .container {
    display: grid;
    grid-template-rows: repeat(2, 174px) 368px;
    gap: 2rem 1.8rem;
    margin-block: 8.8rem 12rem;
  }

  .img-wrapper {
    position: relative;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
  }

  @media screen and (min-width: 600px) {
    .container {
      grid-template-rows: repeat(2, 174px);
      grid-template-columns: repeat(5, 1fr);
      margin-block: 12rem;
    }

    .img-wrapper:first-child {
      grid-row: 1 / 2;
      grid-column: 1 / 3;
    }

    .img-wrapper:nth-child(2) {
      grid-row: 2 / 3;
      grid-column: 1 / 3;
    }

    .img-wrapper:nth-child(3) {
      grid-row: 1 / 3;
      grid-column: 3 / 6;
    }
  }

  @media screen and (min-width: 1240px) {
    .container {
      grid-template-rows: repeat(2, 280px);
      gap: 3.2rem 3rem;
      margin-block: 16rem;
    }
  }
`;
