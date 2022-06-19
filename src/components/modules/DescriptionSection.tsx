import Image from "next/image";

import useViewportWidth from "../../hooks/useViewportWidth";

import { colors, sizes } from "../../styles/theme";

import mobileImg from "../../../public/images/mobile/image-best-gear.jpg";
import tabletImg from "../../../public/images/tablet/image-best-gear.jpg";

const DescriptionSection = () => {
  const [width] = useViewportWidth();

  return (
    <>
      <section>
        <div className="img-wrapper">
          <Image
            src={width && width < 600 ? mobileImg : tabletImg}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h3>
          bringing you the <span>best</span> audio gear
        </h3>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </section>

      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          margin: 12rem 2.4rem;
          text-align: center;
        }

        .img-wrapper {
          position: relative;
          margin-bottom: 4rem;
          height: 300px;
          border-radius: 8px;
          overflow: hidden;
        }

        h3 {
          margin-bottom: 3.2rem;
        }

        p {
          opacity: 0.5;
        }

        h3,
        p {
          align-self: center;
        }

        @media screen and (min-width: 600px) {
          .img-wrapper {
            margin-bottom: 6.3rem;
          }

          h3,
          p {
            width: 80%;
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
