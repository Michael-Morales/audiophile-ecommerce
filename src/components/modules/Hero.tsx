import Image from "next/image";

import Button from "../elements/Button";

import useViewportWidth from "../../hooks/useViewportWidth";

import { sizes, colors } from "../../styles/theme";

import mobileImage from "../../../public/images/mobile/image-header.jpg";
import tabletImage from "../../../public/images/tablet/image-header.jpg";
import desktopImage from "../../../public/images/desktop/image-hero.jpg";

const Hero = () => {
  const [width] = useViewportWidth();

  return (
    <>
      <div className="container">
        <div className="img-wrapper">
          <Image
            src={
              width && width < 600
                ? mobileImage
                : width && width < 1240
                ? tabletImage
                : desktopImage
            }
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className="overline">new product</p>
        <h1>XX99 mark II headphones</h1>
        <p className="subtitle">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button title="see product" route="/" />
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-top: 9rem;
          margin: 0 2.4rem;
          height: 100vh;
          text-align: center;
        }

        .img-wrapper {
          position: absolute;
          inset: 0;
          z-index: -1;
        }

        .overline {
          margin-bottom: 1.6rem;
          font-weight: 400;
          text-transform: uppercase;
          opacity: 0.5;
        }

        h1 {
          margin-bottom: 2.4rem;
          max-width: 400px;
        }

        .subtitle {
          margin-bottom: 2.8rem;
          max-width: 350px;
          font-weight: 400;
          opacity: 0.75;
        }

        @media screen and (min-width: 600px) {
          .container {
            margin: 0 4rem;
          }

          .overline {
            margin-bottom: 2.4rem;
          }

          .subtitle {
            margin-bottom: 4rem;
          }
        }

        @media screen and (min-width: 905px) {
          .container {
            margin: 0 auto;
            max-width: 840px;
          }
        }

        @media screen and (min-width: 1240px) {
          .container {
            align-items: flex-start;
            padding-top: 9.6rem;
            margin: 0 200px;
            max-width: unset;
            text-align: left;
          }
        }

        @media screen and (min-width: 1440px) {
          .container {
            margin: 0 auto;
            max-width: 1110px;
          }
        }
      `}</style>
      <style jsx>{`
        div {
          color: ${colors.white};
        }

        .overline {
          font-size: ${sizes.mobile.text.overline};
          line-height: ${sizes.mobile.lineHeight.overline};
          letter-spacing: ${sizes.mobile.letterSpacing.overline};
        }
      `}</style>
    </>
  );
};

export default Hero;
