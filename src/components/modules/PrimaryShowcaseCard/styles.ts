import css from "styled-jsx/css";

import { colors, sizes } from "../../../styles/theme";

import getImgURL from "../../../utils/getImgURL";

export const styles = css`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4.8rem;
    padding: 5.5rem 2.4rem;
    border-radius: 8px;
    overflow: hidden;
  }

  .img-wrapper {
    position: relative;
    width: 53%;
    max-width: 200px;
  }

  .img-wrapper::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 324%;
    height: 324%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    transform: translate(-50%, -50%);
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 349px;
    text-align: center;
    z-index: 2;
  }

  h2 {
    margin-bottom: 2.4rem;
    font-size: 3.6rem;
    line-height: 4rem;
  }

  p {
    margin-bottom: 2.4rem;
    opacity: 0.75;
  }

  @media screen and (min-width: 600px) {
    .container {
      padding-top: 5.2rem;
      padding-bottom: 6.4rem;
    }

    .img-wrapper::before {
      width: 472%;
      height: 472%;
    }

    p {
      margin-bottom: 4rem;
    }
  }

  @media screen and (min-width: 1240px) {
    .container {
      flex-direction: row;
      justify-content: space-between;
      gap: 14rem;
      padding-left: 12rem;
      padding-right: 9.5rem;
      height: 560px;
    }

    .img-wrapper {
      position: relative;
      bottom: -75px;
      width: 100%;
      max-width: 375px;
    }

    .img-wrapper::before {
      width: 250%;
      height: 250%;
    }

    .content {
      align-items: flex-start;
      text-align: left;
    }
  }
`;

export const dynamicStyles = css`
  .container {
    color: ${colors.white};
    background-color: ${colors.primary};
  }

  .h2 {
    letter-spacing: ${sizes.mobile.letterSpacing.h5};
  }

  .img-wrapper::before {
    background-image: url(${getImgURL("shared/pattern-circles")});
  }

  @media screen and (min-width: 600px) {
    h2 {
      font-size: ${sizes.desktop.text.h1};
      line-height: ${sizes.desktop.lineHeight.h1};
      letter-spacing: ${sizes.desktop.letterSpacing.h1};
    }
  }
`;
