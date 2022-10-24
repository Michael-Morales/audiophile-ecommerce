import Image from "next/image";
import Link from "next/link";

import NavLink from "../../elements/NavLink";
import FacebookIcon from "../../elements/FacebookIcon";
import TwitterIcon from "../../elements/TwitterIcon";
import InstagramIcon from "../../elements/InstagramIcon";

import logo from "../../../../public/images/icons/logo.svg";

const Footer = () => {
  return (
    <footer className="relative bg-dark pb-[2.375rem] pt-[3.25rem] before:absolute before:top-0 before:left-1/2 before:h-1 before:w-[100px] before:-translate-x-1/2 before:bg-orange sm:pt-[3.75rem] sm:pb-12 sm:before:left-10 sm:before:transform-none md:pt-[4.688rem] md:before:left-[calc((100%-840px)/2)] lg:before:left-[200px] xl:before:left-[calc((100%-1110px)/2)]">
      <div className="mx-6 flex flex-col sm:mx-10 sm:items-start md:mx-auto md:max-w-[840px] lg:mx-[200px] lg:max-w-none xl:mx-auto xl:max-w-[1110px]">
        <div className="flex flex-col items-center gap-12 sm:items-start sm:gap-8 md:w-full md:flex-row md:justify-between">
          <div>
            <Image src={logo} alt="" />
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-[2.125rem]">
            <NavLink name="home" route="/" />
            <NavLink name="headphones" route="/category/headphones" />
            <NavLink name="speakers" route="/category/speakers" />
            <NavLink name="earphones" route="/category/earphones" />
          </div>
        </div>
        <p className="my-12 text-center text-white opacity-50 sm:mt-8 sm:mb-20 sm:text-left md:mt-9 md:mb-14 md:max-w-[540px]">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we’re open 7 days a week.
        </p>
        <div className="flex flex-col items-center gap-12 sm:w-full sm:flex-row sm:justify-between sm:self-start">
          <p className="text-white opacity-50">
            Copyright 2022. All Rights Reserved
          </p>
          <div className="flex gap-4 md:relative md:bottom-[88px]">
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
  );
};

export default Footer;
