import Image from "next/image";

import Button from "../elements/Button";

import { colors, sizes } from "../../styles/theme";

const PrimaryShowcaseCard = () => {
  return (
    <>
      <div className="container">
        <div className="img-wrapper">
          <Image
            src="/images/shared/image-speaker-zx9.png"
            alt=""
            width={756}
            height={918}
          />
        </div>
        <div className="content">
          <h2>
            zx9 <br /> speaker
          </h2>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button title="see product" route="/" dark />
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4.8rem;
          padding: 5.5rem 2.4rem;
          border-radius: 8px;
          overflow: hidden;
        }

        .img-wrapper {
          position: relative;
          width: 53%;
          max-width: 200px;
        }

        .img-wrapper::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 324%;
          height: 324%;
          background-image: url("/images/shared/pattern-circles.svg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: 100%;
          transform: translate(-50%, -50%);
        }

        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 349px;
          text-align: center;
          z-index: 2;
        }

        h2 {
          margin-bottom: 2.4rem;
          font-size: 3.6rem;
          line-height: 4rem;
        }

        p {
          margin-bottom: 2.4rem;
          opacity: 0.75;
        }

        @media screen and (min-width: 600px) {
          .container {
            padding-top: 5.2rem;
            padding-bottom: 6.4rem;
          }

          .img-wrapper::before {
            width: 472%;
            height: 472%;
          }

          p {
            margin-bottom: 4rem;
          }
        }
      `}</style>
      <style jsx>{`
        .container {
          color: ${colors.white};
          background-color: ${colors.primary};
        }

        .h2 {
          letter-spacing: ${sizes.mobile.letterSpacing.h5};
        }

        @media screen and (min-width: 600px) {
          h2 {
            font-size: ${sizes.desktop.text.h1};
            line-height: ${sizes.desktop.lineHeight.h1};
            letter-spacing: ${sizes.desktop.letterSpacing.h1};
          }
        }
      `}</style>
    </>
  );
};

export default PrimaryShowcaseCard;
