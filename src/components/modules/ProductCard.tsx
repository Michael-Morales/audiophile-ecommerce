import type { ImagePathsType } from "../../types";

import { useState, memo } from "react";
import Image from "next/image";

import Button from "../elements/Button";
import ProductQuantity from "./ProductQuantity";

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
  const [count, setCount] = useState(1);

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
          <div className="add-to-cart">
            <ProductQuantity
              quantity={count}
              decrement={() => setCount(count - 1)}
              increment={() => setCount(count + 1)}
            />
            <Button title="add to cart" action={() => console.log("ADDED")} />
          </div>
        </div>
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

        h1 {
          max-width: 300px;
        }

        .description {
          opacity: 0.5;
        }

        .price {
          margin-bottom: 3.2rem;
          font-size: 1.8rem;
          font-weight: 700;
          letter-spacing: 1.3px;
        }

        .overline,
        h1,
        .description {
          margin-bottom: 2.4rem;
        }

        .add-to-cart {
          display: flex;
          gap: 1.6rem;
        }

        @media screen and (min-width: 600px) {
          article {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 7%;
          }

          .img-wrapper {
            height: 480px;
          }

          .overline {
            margin-bottom: 1.6rem;
          }

          h1,
          .description {
            margin-bottom: 3.2rem;
          }
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

export default memo(ProductCard);
