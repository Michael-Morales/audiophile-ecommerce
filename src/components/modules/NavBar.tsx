import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import MenuIcon from "../elements/MenuIcon";
import CartIcon from "../elements/CartIcon";
import CategoryCard from "./CategoryCard";
import NavLink from "../elements/NavLink";

import useViewportWidth from "../../hooks/useViewportWidth";

import { colors } from "../../styles/theme";

import logo from "../../../public/images/icons/logo.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width] = useViewportWidth();

  return (
    <>
      <header>
        <div className="top-bar">
          <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu">
            <MenuIcon />
          </button>
          <Link href="/">
            <a className="logo">
              <Image src={logo} alt="" />
            </a>
          </Link>
          <nav className="desktop-nav">
            <NavLink name="home" route="/" />
            <NavLink name="headphones" route="/" />
            <NavLink name="speakers" route="/" />
            <NavLink name="earphones" route="/" />
          </nav>
          <CartIcon />
        </div>
        <nav className="mobile-nav">
          <div className="links-container">
            <CategoryCard
              title="headphones"
              imgWidth={438}
              imgHeight={422}
              imgRatio={width && width < 600 ? 0.2 : 0.35}
              route="/"
              linkTitle="shop"
              type={width && width < 600 ? "small" : ""}
            />
            <CategoryCard
              title="speakers"
              imgWidth={438}
              imgHeight={408}
              imgRatio={width && width < 600 ? 0.2 : 0.35}
              route="/"
              linkTitle="shop"
              type={width && width < 600 ? "small" : ""}
            />
            <CategoryCard
              title="earphones"
              imgWidth={438}
              imgHeight={380}
              imgRatio={width && width < 600 ? 0.22 : 0.4}
              route="/"
              linkTitle="shop"
              type={width && width < 600 ? "small" : ""}
            />
          </div>
        </nav>
        <div className="background" onClick={() => setIsOpen(false)} />
      </header>

      <style jsx>{`
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
      `}</style>
      <style jsx>{`
        header::before {
          background-color: ${colors.white};
        }

        .top-bar {
          background-color: ${colors.dark};
        }

        .mobile-nav {
          transform: ${isOpen ? "translateY(0)" : "translateY(-1000px)"};
          background-color: ${colors.white};
        }

        .background {
          display: ${isOpen ? "block" : "none"};
          background-color: ${colors.secondaryButton};
        }
      `}</style>
    </>
  );
};

export default NavBar;
