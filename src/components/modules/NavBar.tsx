import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import MenuIcon from "../elements/MenuIcon";
import CartIcon from "../elements/CartIcon";
import CategoryCard from "./CategoryCard";

import { colors } from "../../styles/theme";

import logo from "../../../public/images/icons/logo.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header>
        <div className="top-bar">
          <button onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon />
          </button>
          <Link href="/">
            <a>
              <Image src={logo} alt="" />
            </a>
          </Link>
          <CartIcon />
        </div>
        <nav>
          <div className="links-container">
            <CategoryCard
              title="headphones"
              imgWidth={438}
              imgHeight={422}
              imgRatio={0.35}
              route="/"
              linkTitle="shop"
            />
            <CategoryCard
              title="speakers"
              imgWidth={438}
              imgHeight={408}
              imgRatio={0.35}
              route="/"
              linkTitle="shop"
            />
            <CategoryCard
              title="earphones"
              imgWidth={438}
              imgHeight={380}
              imgRatio={0.4}
              route="/"
              linkTitle="shop"
            />
          </div>
        </nav>
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

        .top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2.4rem;
          height: 100%;
          width: 100%;
        }

        button {
          background-color: unset;
          border: none;
        }

        nav {
          position: absolute;
          top: 90px;
          padding: 3.2rem 0;
          width: 100%;
          border-radius: 0 0 8px 8px;
          z-index: -1;
          transition: transform ease-out 0.3s;
        }

        .links-container {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
          margin-inline: 2.4rem;
        }
      `}</style>
      <style jsx>{`
        header {
          border-bottom: 1px solid ${colors.whiteFade};
        }

        .top-bar {
          background-color: ${colors.dark};
        }

        nav {
          transform: ${isOpen ? "translateY(0)" : "translateY(-1000px)"};
          background-color: ${colors.white};
        }
      `}</style>
    </>
  );
};

export default NavBar;
