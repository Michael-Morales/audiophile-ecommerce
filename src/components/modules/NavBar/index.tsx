import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import MenuIcon from "../../elements/MenuIcon";
import CartIcon from "../../elements/CartIcon";
import CategoryCard from "../CategoryCard";
import NavLink from "../../elements/NavLink";
import Modal from "../Modal";
import CartModal from "../CartModal";

import useViewportWidth from "../../../hooks/useViewportWidth";

import { styles, dynamicStyles } from "./styles";

import logo from "../../../../public/images/icons/logo.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [width] = useViewportWidth();
  const router = useRouter();

  const toggleMenu = () => {
    if (showModal) setShowModal(false);

    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setShowModal(false);
  };

  const toggleCart = () => {
    if (isOpen) setIsOpen(false);

    setShowModal(!showModal);
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", closeMenu);

    return () => {
      router.events.off("routeChangeComplete", closeMenu);
    };
  }, [router]);

  return (
    <>
      <header>
        <div className="top-bar">
          <button onClick={toggleMenu} className="mobile-menu">
            <MenuIcon />
          </button>
          <Link href="/">
            <a className="logo">
              <Image src={logo} alt="" />
            </a>
          </Link>
          <nav className="desktop-nav">
            <NavLink name="home" route="/" />
            <NavLink name="headphones" route="/category/headphones" />
            <NavLink name="speakers" route="/category/speakers" />
            <NavLink name="earphones" route="/category/earphones" />
          </nav>
          <button
            onClick={toggleCart}
            className="cart-icon"
            disabled={router.pathname === "/checkout"}
          >
            <CartIcon active={showModal} />
          </button>
          {showModal && (
            <Modal show={showModal} onClose={() => setShowModal(false)}>
              <CartModal />
            </Modal>
          )}
        </div>
        <nav className="mobile-nav">
          <div className="links-container">
            <CategoryCard
              title="headphones"
              imgWidth={438}
              imgHeight={422}
              imgRatio={width && width < 600 ? 0.2 : 0.35}
              route="/category/headphones"
              linkTitle="shop"
              type={width && width < 600 ? "small" : ""}
            />
            <CategoryCard
              title="speakers"
              imgWidth={438}
              imgHeight={408}
              imgRatio={width && width < 600 ? 0.2 : 0.35}
              route="/category/speakers"
              linkTitle="shop"
              type={width && width < 600 ? "small" : ""}
            />
            <CategoryCard
              title="earphones"
              imgWidth={438}
              imgHeight={380}
              imgRatio={width && width < 600 ? 0.22 : 0.4}
              route="/category/earphones"
              linkTitle="shop"
              type={width && width < 600 ? "small" : ""}
            />
          </div>
        </nav>
        <div className="background" onClick={() => setIsOpen(false)} />
      </header>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
      <style jsx>{`
        .mobile-nav {
          transform: ${isOpen ? "translateY(0)" : "translateY(-1000px)"};
        }

        .background {
          display: ${isOpen ? "block" : "none"};
        }
      `}</style>
    </>
  );
};

export default NavBar;
