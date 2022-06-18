import type { NextPage } from "next";

import Button from "../elements/Button";

import { sizes, colors } from "../../styles/theme";

const Hero: NextPage = () => {
  return (
    <>
      <div>
        <p className="overline">new product</p>
        <h1>XX99 mark II headphones</h1>
        <p className="subtitle">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button title="see product" route="/" />
      </div>

      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 9rem 2.4rem 0;
          height: 100vh;
          text-align: center;
          background-image: url("/images/mobile/image-header.webp");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
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
          div {
            background-image: url("/images/tablet/image-header.webp");
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
