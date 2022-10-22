import { useState, useEffect, useContext } from "react";
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

import { Context as CartContext } from "../../../context/cartContext";

import logo from "../../../../public/images/icons/logo.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [width] = useViewportWidth();
  const router = useRouter();
  const { state } = useContext(CartContext);

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
    <header className="fixed z-[9999] flex h-[5.625rem] w-full items-center before:absolute before:bottom-0 before:h-px before:w-full before:bg-white before:opacity-10 sm:before:left-10 sm:before:w-[calc(100%-2.5rem*2)] md:before:left-1/2 md:before:w-[840px] md:before:-translate-x-1/2 lg:h-24 lg:before:left-[200px] lg:before:w-[calc(100%-(200px*2))] lg:before:transform-none xl:before:left-1/2 xl:before:w-[1110px] xl:before:-translate-x-1/2">
      <div className="flex h-full w-full items-center justify-between bg-dark px-6 sm:px-10 md:px-[calc((100%-840px)/2)] lg:px-[200px] xl:px-[calc((100%-1110px)/2)]">
        <button className="lg:hidden" aria-label="menu" onClick={toggleMenu}>
          <MenuIcon />
        </button>
        <Link href="/">
          <a
            className="flex items-center sm:ml-[2.625rem] sm:mr-auto lg:mx-0"
            aria-label="home"
          >
            <Image src={logo} alt="" />
          </a>
        </Link>
        <nav className="hidden lg:flex lg:gap-[2.125rem]">
          <NavLink name="home" route="/" />
          <NavLink name="headphones" route="/category/headphones" />
          <NavLink name="speakers" route="/category/speakers" />
          <NavLink name="earphones" route="/category/earphones" />
        </nav>
        <button
          onClick={toggleCart}
          className="relative flex items-center"
          disabled={router.pathname === "/checkout"}
          aria-label="cart"
        >
          <CartIcon active={showModal} />
          {state.length > 0 && (
            <span className="absolute -top-[5px] -right-[5px] h-[6px] w-[6px] animate-bounce rounded-full bg-orange" />
          )}
        </button>
        {showModal && (
          <Modal show={showModal} onClose={() => setShowModal(false)}>
            <CartModal />
          </Modal>
        )}
      </div>
      <nav
        className={`absolute top-[90px] -z-[1] w-full rounded-b-lg bg-white pt-4 pb-8 transition-transform duration-300 sm:pt-14 sm:pb-16 lg:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-[1000px]"
        }`}
      >
        <div className="mx-6 flex flex-col gap-4 sm:mx-10 sm:flex-row sm:gap-[.625rem] md:mx-auto md:max-w-[840px]">
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
      <div
        className={`absolute top-0 -z-[2] h-screen w-full ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      />
    </header>
  );
};

export default NavBar;
