import Image from "next/image";

import Button from "../elements/Button";

import useViewportWidth from "../../hooks/useViewportWidth";

import { colors, sizes } from "../../styles/theme";

import mobileImg from "../../../public/images/mobile/image-earphones-yx1.jpg";
import tabletImg from "../../../public/images/tablet/image-earphones-yx1.jpg";
import desktopImg from "../../../public/images/desktop/image-earphones-yx1.jpg";

const TertiaryShowcaseCard = () => {
  const [width] = useViewportWidth();

  return (
    <>
      <div className="container">
        <div className="img-wrapper">
          <Image
            src={
              width && width < 600
                ? mobileImg
                : width && width < 1240
                ? tabletImg
                : desktopImg
            }
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="content">
          <h3>yx1 earphones</h3>
          <Button title="see product" route="/" type="light" />
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          gap: 2.4rem;
        }

        .img-wrapper {
          position: relative;
          height: 200px;
          border-radius: 8px;
          overflow: hidden;
        }

        .content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 3.2rem;
          padding: 0 2.4rem;
          height: 200px;
          border-radius: 8px;
        }

        @media screen and (min-width: 600px) {
          .container {
            flex-direction: row;
            gap: 1rem;
          }

          .img-wrapper {
            flex: 50%;
            height: 320px;
          }

          .content {
            flex: 50%;
            padding: 0 4rem;
            height: 320px;
          }

          h3 {
            font-size: 2.8rem;
          }
        }

        @media screen and (min-width: 1240px) {
          .container {
            gap: 3rem;
          }

          .content {
            padding-left: 9.5rem;
          }
        }
      `}</style>
      <style jsx>{`
        .content {
          background-color: ${colors.grey};
        }

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

export default TertiaryShowcaseCard;
