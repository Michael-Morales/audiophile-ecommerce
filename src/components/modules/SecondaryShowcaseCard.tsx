import Image from "next/image";

import Button from "../elements/Button";

import useViewportWidth from "../../hooks/useViewportWidth";

import { sizes } from "../../styles/theme";

import mobileImg from "../../../public/images/mobile/image-speaker-zx7.jpg";
import tabletImg from "../../../public/images/tablet/image-speaker-zx7.jpg";

const SecondaryShowcaseCard = () => {
  const [width] = useViewportWidth();

  return (
    <>
      <div className="container">
        <div className="img-wrapper">
          <Image
            src={width && width < 600 ? mobileImg : tabletImg}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h3>zx7 speaker</h3>
        <Button title="see product" route="/" light />
      </div>

      <style jsx>{`
        .container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 3.2rem;
          padding: 0 2.4rem;
          height: 320px;
          border-radius: 8px;
          overflow: hidden;
        }

        .img-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        @media screen and (min-width: 600px) {
          .container {
            padding-left: 6.2rem;
          }
        }
      `}</style>
      <style jsx>{`
        @media screen and (min-width: 600px) {
          h3 {
            font-size: ${sizes.mobile.text.h3};
            line-height: ${sizes.mobile.lineHeight.h3};
            letter-spacing: ${sizes.mobile.letterSpacing.h3};
          }
        }
      `}</style>
    </>
  );
};

export default SecondaryShowcaseCard;
