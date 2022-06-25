import type { ImagePathsType } from "../../types";

import Image from "next/image";

import Button from "../elements/Button";

import useViewPortWidth from "../../hooks/useViewportWidth";

import formatPrice from "../../utils/formatPrice";

import { colors, sizes } from "../../styles/theme";

type Props = {
  id: number;
  isNew: boolean;
  name: string;
  description: string;
  price: number;
  image: ImagePathsType;
};

const ProductCard = ({ image, isNew, name, description, price }: Props) => {
  const [width] = useViewPortWidth();

  return (
    <>
      <article>
        <div className="img-wrapper">
          <Image
            src={
              width && width < 600
                ? image.mobile
                : width && width < 1240
                ? image.tablet
                : image.desktop
            }
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="content">
          {isNew && <p className="overline">new product</p>}
          <h1>{name}</h1>
          <p className="description">{description}</p>
          <p className="price">{formatPrice(price)}</p>
        </div>
        <div className="add-to-cart"></div>
      </article>

      <style jsx>{`
        article {
          display: flex;
          flex-direction: column;
          gap: 3.2rem;
        }

        .img-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 8px;
          overflow: hidden;
        }

        .overline {
          text-transform: uppercase;
        }

        .description {
          opacity: 0.5;
        }

        .price {
          font-size: 1.8rem;
          font-weight: 700;
          letter-spacing: 1.3px;
        }

        .overline,
        h1,
        .description {
          margin-bottom: 2.4rem;
        }
      `}</style>
      <style jsx>{`
        .overline {
          color: ${colors.primary};
          font-size: ${sizes.mobile.text.overline};
          line-height: ${sizes.mobile.lineHeight.overline};
          letter-spacing: ${sizes.mobile.letterSpacing.overline};
        }

        h1 {
          font-size: ${sizes.mobile.text.h3};
          line-height: ${sizes.mobile.lineHeight.h3};
          letter-spacing: ${sizes.mobile.letterSpacing.h3};
        }
      `}</style>
    </>
  );
};

export default ProductCard;
