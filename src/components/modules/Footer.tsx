import Image from "next/image";
import Link from "next/link";

import NavLink from "../elements/NavLink";
import FacebookIcon from "../elements/FacebookIcon";
import TwitterIcon from "../elements/TwitterIcont";
import InstagramIcon from "../elements/InstagramIcon";

import { colors } from "../../styles/theme";

import logo from "../../../public/images/icons/logo.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="links-section">
          <div className="img-wrapper">
            <Image src={logo} alt="" />
          </div>
          <div className="links">
            <NavLink name="home" route="/" />
            <NavLink name="headphones" route="/" />
            <NavLink name="speakers" route="/" />
            <NavLink name="earphones" route="/" />
          </div>
        </div>
        <p className="description">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we’re open 7 days a week.
        </p>
        <div className="socials-section">
          <p>Copyright 2021. All Rights Reserved</p>
          <div className="socials-links">
            <Link href="/">
              <a>
                <FacebookIcon />
              </a>
            </Link>
            <Link href="/">
              <a>
                <TwitterIcon />
              </a>
            </Link>
            <Link href="/">
              <a>
                <InstagramIcon />
              </a>
            </Link>
          </div>
        </div>
      </footer>

      <style jsx>{`
        footer,
        .links-section,
        .links,
        .socials-section {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        footer {
          position: relative;
          padding: 5.2rem 0 3.8rem;
          gap: 4.8rem;
        }

        footer::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          width: 100px;
          height: 4px;
          transform: translateX(-50%);
        }

        .links-section,
        .socials-section {
          gap: 4.8rem;
        }

        .links {
          gap: 1.6rem;
        }

        .socials-links {
          display: flex;
          gap: 1.6rem;
        }

        p {
          margin: 0 2.4rem;
          text-align: center;
          opacity: 0.5;
        }
      `}</style>
      <style jsx>{`
        footer {
          background-color: ${colors.black};
        }

        footer::before {
          background-color: ${colors.primary};
        }

        p {
          color: ${colors.white};
        }
      `}</style>
    </>
  );
};

export default Footer;
