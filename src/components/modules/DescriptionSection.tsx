import Image from "next/image";

import useViewportWidth from "../../hooks/useViewportWidth";

import { colors, sizes } from "../../styles/theme";

import mobileImg from "../../../public/images/mobile/image-best-gear.jpg";
import tabletImg from "../../../public/images/tablet/image-best-gear.jpg";
import desktopImg from "../../../public/images/desktop/image-best-gear.jpg";

const DescriptionSection = () => {
  const [width] = useViewportWidth();

  return (
    <>
      <section>
        <div className="img-container">
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
        </div>
        <div className="content">
          <h3>
            bringing you the <span>best</span> audio gear
          </h3>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </section>

      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          gap: 4rem;
          margin-block: 12rem;
        }

        .img-container {
          border-radius: 8px;
          overflow: hidden;
        }

        .img-wrapper {
          position: relative;
          height: 300px;
        }

        .content {
          align-self: center;
          text-align: center;
        }

        h3 {
          margin-bottom: 3.2rem;
        }

        p {
          opacity: 0.5;
        }

        @media screen and (min-width: 600px) {
          section {
            gap: 6.3rem;
          }

          .content {
            width: 80%;
          }
        }

        @media screen and (min-width: 1240px) {
          section {
            flex-direction: row;
            gap: 3rem;
            margin-block: 16rem;
          }

          .img-container {
            flex: 50%;
            order: 2;
          }

          .img-wrapper {
            height: 588px;
          }

          .content {
            flex: 50%;
            text-align: left;
          }

          h3,
          p {
            max-width: 445px;
          }
        }
      `}</style>
      <style jsx>{`
        span {
          color: ${colors.primary};
        }

        @media screen and (min-width: 600px) {
          h3 {
            font-size: ${sizes.desktop.text.h2};
            line-height: ${sizes.desktop.lineHeight.h2};
            letter-spacing: ${sizes.desktop.letterSpacing.h2};
          }
        }
      `}</style>
    </>
  );
};

export default DescriptionSection;
