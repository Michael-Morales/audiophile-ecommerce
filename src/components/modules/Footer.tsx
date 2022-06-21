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
        <div className="container">
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
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we’re open 7 days a week.
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
        </div>
      </footer>

      <style jsx>{`
        .container,
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

        .container {
          margin: 0 2.4rem;
        }

        .links-section,
        .socials-section {
          gap: 4.8rem;
        }

        .links {
          gap: 1.6rem;
        }

        .description {
          margin-block: 4.8rem;
          text-align: center;
        }

        .socials-links {
          display: flex;
          gap: 1.6rem;
        }

        p {
          opacity: 0.5;
        }

        @media screen and (min-width: 600px) {
          footer {
            padding: 6rem 0 4.8rem;
          }

          footer::before {
            left: 4rem;
            transform: unset;
          }

          .container {
            align-items: flex-start;
            margin: 0 4rem;
          }

          .links-section {
            align-items: flex-start;
            gap: 3.2rem;
          }

          .links {
            flex-direction: row;
            gap: 3.4rem;
          }

          .description {
            margin-block: 3.2rem 8rem;
            text-align: left;
          }

          .socials-section {
            flex-direction: row;
            justify-content: space-between;
            align-self: flex-start;
            width: 100%;
          }
        }

        @media screen and (min-width: 905px) {
          footer {
            padding-top: 7.5rem;
          }

          footer::before {
            left: calc((100% - 840px) / 2);
          }

          .container {
            margin: 0 auto;
            max-width: 840px;
          }

          .links-section {
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
          }

          .description {
            margin-block: 3.6rem 5.6rem;
            max-width: 540px;
          }

          .socials-links {
            position: relative;
            bottom: 88px;
          }
        }

        @media screen and (min-width: 1240px) {
          footer::before {
            left: 200px;
          }

          .container {
            margin: 0 200px;
            max-width: unset;
          }
        }

        @media screen and (min-width: 1440px) {
          footer::before {
            left: calc((100% - 1110px) / 2);
          }

          .container {
            margin: 0 auto;
            max-width: 1110px;
          }
        }
      `}</style>
      <style jsx>{`
        footer {
          background-color: ${colors.dark};
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
