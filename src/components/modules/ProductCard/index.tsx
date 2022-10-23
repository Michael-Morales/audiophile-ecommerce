import type { ImagePathsType } from "../../../types";

import { useState, memo, useContext } from "react";

import Button from "../../elements/Button";
import Image from "../../elements/Image";
import ProductQuantity from "../ProductQuantity";

import useViewPortWidth from "../../../hooks/useViewportWidth";
import useLocalStorage from "../../../hooks/useLocalStorage";

import { Context as CartContext } from "../../../context/cartContext";

import formatPrice from "../../../utils/formatPrice";

type Props = {
  id: string;
  isNew: boolean;
  name: string;
  cartName: string;
  description: string;
  price: number;
  image: ImagePathsType;
  slug: string;
};

const ProductCard = ({
  id,
  image,
  isNew,
  name,
  cartName,
  description,
  price,
  slug,
}: Props) => {
  const [width] = useViewPortWidth();
  const [addItem] = useLocalStorage();
  const [count, setCount] = useState(1);
  const { dispatch } = useContext(CartContext);

  const addToCart = () => {
    const item = {
      id,
      quantity: count,
      price,
      name: cartName,
      image: image.mobile,
      slug,
    };

    addItem(item);

    dispatch({
      type: "add_item",
      payload: item,
    });
  };

  return (
    <article className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-[5%] lg:gap-[10%]">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg sm:h-[480px] sm:flex-1 sm:grow-[0.4] lg:h-[560px] lg:grow">
        <Image
          mobile={image.mobile}
          tablet={image.tablet}
          desktop={image.desktop}
          alt={name}
          width={width}
          priority
        />
      </div>
      <div className="sm:flex-1 sm:grow-[0.6] lg:grow">
        {isNew && (
          <p className="mb-6 text-sm uppercase leading-tight tracking-extra text-orange sm:mb-4">
            new product
          </p>
        )}
        <h1 className="mb-6 max-w-[300px] text-2xl leading-large tracking-6 sm:mb-8 lg:text-4xl lg:leading-3xl lg:tracking-4">
          {name}
        </h1>
        <p className="mb-6 opacity-50 sm:mb-8">{description}</p>
        <p className="mb-8 text-lg font-bold tracking-3 lg:mb-12">
          {formatPrice(price)}
        </p>
        <div className="flex gap-4">
          <ProductQuantity
            quantity={count}
            decrement={() => setCount(count - 1)}
            increment={() => setCount(count + 1)}
          />
          <Button title="add to cart" action={addToCart} />
        </div>
      </div>
    </article>
  );
};

export default memo(ProductCard);
