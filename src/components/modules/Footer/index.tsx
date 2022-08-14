import Image from "next/image";
import Link from "next/link";

import NavLink from "../../elements/NavLink";
import FacebookIcon from "../../elements/FacebookIcon";
import TwitterIcon from "../../elements/TwitterIcon";
import InstagramIcon from "../../elements/InstagramIcon";

import logo from "../../../../public/images/icons/logo.svg";

import { styles, dynamicStyles } from "./styles";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="links-section">
            <div className="img-wrapper">
              <Image src={logo} alt="" />
            </div>
            <div className="links">
              <NavLink name="home" route="/" />
              <NavLink name="headphones" route="/category/headphones" />
              <NavLink name="speakers" route="/category/speakers" />
              <NavLink name="earphones" route="/category/earphones" />
            </div>
          </div>
          <p className="description">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we’re open 7 days a week.
          </p>
          <div className="socials-section">
            <p>Copyright 2022. All Rights Reserved</p>
            <div className="socials-links">
              <Link href="https://www.facebook.com">
                <a target="_blank" rel="noreferrer" aria-label="facebook">
                  <FacebookIcon />
                </a>
              </Link>
              <Link href="https://twitter.com">
                <a target="_blank" rel="noreferrer" aria-label="twitter">
                  <TwitterIcon />
                </a>
              </Link>
              <Link href="https://www.instagram.com">
                <a target="_blank" rel="noreferrer" aria-label="instagram">
                  <InstagramIcon />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default Footer;
