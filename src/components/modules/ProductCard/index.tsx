import type { ImagePathsType } from "../../../types";

import { useState, memo, useContext } from "react";
import Image from "next/image";

import Button from "../../elements/Button";
import ProductQuantity from "../ProductQuantity";

import useViewPortWidth from "../../../hooks/useViewportWidth";
import useLocalStorage from "../../../hooks/useLocalStorage";

import { Context as CartContext } from "../../../context/cartContext";

import formatPrice from "../../../utils/formatPrice";

import { styles, dynamicStyles } from "./styles";

type Props = {
  id: number;
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
  const [addToLocalStorage] = useLocalStorage();
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

    addToLocalStorage(item);

    dispatch({
      type: "add_item",
      payload: item,
    });
  };

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
            alt={name}
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
            <Button title="add to cart" action={addToCart} />
          </div>
        </div>
      </article>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default memo(ProductCard);
