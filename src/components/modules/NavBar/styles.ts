import css from "styled-jsx/css";

import { colors } from "../../../styles/theme";

export const styles = css`
  header {
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
    height: 9rem;
    z-index: 999;
  }

  header::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    opacity: 0.1;
  }

  .top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.4rem;
    height: 100%;
    width: 100%;
  }

  .mobile-menu {
    background-color: unset;
    border: none;
  }

  .mobile-nav {
    position: absolute;
    top: 90px;
    padding: 1.6rem 0 3.2rem;
    width: 100%;
    border-radius: 0 0 8px 8px;
    z-index: -1;
    transition: transform ease-out 0.3s;
  }

  .desktop-nav {
    display: none;
  }

  .links-container {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-inline: 2.4rem;
  }

  .background {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: -2;
  }

  .cart-icon {
    display: flex;
    align-items: center;
    padding: 0;
    background-color: unset;
    border: unset;
  }

  @media screen and (min-width: 600px) {
    header::before {
      left: 4rem;
      width: calc(100% - 4rem * 2);
    }

    .mobile-nav {
      padding: 5.6rem 0 6.8rem;
    }

    .top-bar {
      padding: 0 4rem;
    }

    .links-container {
      flex-direction: row;
      gap: 1rem;
      margin-inline: 4rem;
    }

    .logo {
      margin-inline: 4.2rem auto;
    }
  }

  @media screen and (min-width: 905px) {
    header::before {
      left: 50%;
      width: 840px;
      transform: translateX(-50%);
    }

    .top-bar {
      padding: 0 calc((100% - 840px) / 2);
    }

    .links-container {
      margin-inline: auto;
      max-width: 840px;
    }
  }

  @media screen and (min-width: 1240px) {
    header {
      height: 9.6rem;
    }

    header::before {
      left: 200px;
      width: calc(100% - 200px * 2);
      transform: unset;
    }

    .top-bar {
      padding: 0 200px;
    }

    .logo {
      margin-inline: unset;
    }

    .mobile-menu {
      display: none;
    }

    .mobile-nav {
      display: none;
    }

    .desktop-nav {
      display: flex;
      gap: 3.4rem;
    }
  }

  @media screen and (min-width: 1440px) {
    header::before {
      left: 50%;
      width: 1110px;
      transform: translateX(-50%);
    }

    .top-bar {
      padding: 0 calc((100% - 1110px) / 2);
    }
  }
`;

export const dynamicStyles = css`
  header::before {
    background-color: ${colors.white};
  }

  .top-bar {
    background-color: ${colors.dark};
  }

  .mobile-nav {
    background-color: ${colors.white};
  }

  .background {
    background-color: ${colors.secondaryButton};
  }
`;
