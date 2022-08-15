import type { CartItemType } from "../../../types";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import ProductQuantity from "../ProductQuantity";

import useLocalStorage from "../../../hooks/useLocalStorage";

import { Context as CartContext } from "../../../context/cartContext";

import formatPrice from "../../../utils/formatPrice";
import getImgURL from "../../../utils/getImgURL";

import { styles, dynamicStyles } from "./styles";

type Props = CartItemType & { checkout?: boolean };

const CartItem = ({
  id,
  image,
  name,
  price,
  quantity,
  slug,
  checkout,
}: Props) => {
  const { dispatch } = useContext(CartContext);
  const [, , removeItem, increaseQuantity, decreaseQuantity] =
    useLocalStorage();

  const handleRemove = () => {
    removeItem(id);

    dispatch({ type: "remove_item", payload: id });
  };

  const handleIncrease = () => {
    increaseQuantity(id);

    dispatch({ type: "increase_quantity", payload: id });
  };

  const handleDecrease = () => {
    decreaseQuantity(id);

    dispatch({ type: "decrease_quantity", payload: id });
  };

  return (
    <>
      <div className="container">
        <div className="img-wrapper">
          <Image
            src={getImgURL(image)}
            alt={name}
            layout="fill"
            objectFit="cover"
            priority
            placeholder="blur"
            blurDataURL={getImgURL(image, "blur")}
          />
        </div>
        <div className="informations">
          <Link href={`/product/${slug}`}>
            <a>{name}</a>
          </Link>
          <p className="price">{formatPrice(price)}</p>
        </div>
        {checkout ? (
          <span className="quantity">x{quantity}</span>
        ) : (
          <ProductQuantity
            quantity={quantity}
            increment={handleIncrease}
            decrement={handleDecrease}
            remove={handleRemove}
            small
          />
        )}
      </div>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default CartItem;
