import Image from "next/image";

import Button from "../elements/Button";

import { colors, sizes } from "../../styles/theme";

const PrimaryShowcaseCard = () => {
  return (
    <>
      <div className="container">
        <div className="img-wrapper">
          <Image
            src="/images/shared/image-speaker-zx9.webp"
            alt=""
            width={410}
            height={493}
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
          gap: 32px;
          padding: 3.67rem 1.6rem;
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
          gap: 1.6rem;
          max-width: 349px;
          text-align: center;
        }

        h2 {
          font-size: 2.4rem;
          line-height: 2.67rem;
        }

        p {
          opacity: 0.75;
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
      `}</style>
    </>
  );
};

export default PrimaryShowcaseCard;
