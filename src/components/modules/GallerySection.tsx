import type { ImagePathsType } from "../../types";

import Image from "next/image";

import useViewportWidth from "../../hooks/useViewportWidth";

type Props = {
  first: ImagePathsType;
  second: ImagePathsType;
  third: ImagePathsType;
};

const GallerySection = ({ first, second, third }: Props) => {
  const [width] = useViewportWidth();

  return (
    <>
      <div className="container">
        <div className="img-wrapper">
          <Image
            src={
              width && width < 600
                ? first.mobile
                : width && width < 1240
                ? first.tablet
                : first.desktop
            }
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="img-wrapper">
          <Image
            src={
              width && width < 600
                ? second.mobile
                : width && width < 1240
                ? second.tablet
                : second.desktop
            }
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="img-wrapper">
          <Image
            src={
              width && width < 600
                ? third.mobile
                : width && width < 1240
                ? third.tablet
                : third.desktop
            }
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <style jsx>{`
        .container {
          display: grid;
          grid-template-rows: repeat(2, 174px) 368px;
          gap: 2rem 1.8rem;
          margin-block: 8.8rem 12rem;
        }

        .img-wrapper {
          position: relative;
          width: 100%;
          border-radius: 8px;
          overflow: hidden;
        }

        @media screen and (min-width: 600px) {
          .container {
            grid-template-rows: repeat(2, 174px);
            grid-template-columns: repeat(5, 1fr);
            margin-block: 12rem;
          }

          .img-wrapper:first-child {
            grid-row: 1 / 2;
            grid-column: 1 / 3;
          }

          .img-wrapper:nth-child(2) {
            grid-row: 2 / 3;
            grid-column: 1 / 3;
          }

          .img-wrapper:nth-child(3) {
            grid-row: 1 / 3;
            grid-column: 3 / 6;
          }
        }

        @media screen and (min-width: 1240px) {
          .container {
            grid-template-rows: repeat(2, 280px);
            gap: 3.2rem 3rem;
            margin-block: 16rem;
          }
        }
      `}</style>
    </>
  );
};

export default GallerySection;
