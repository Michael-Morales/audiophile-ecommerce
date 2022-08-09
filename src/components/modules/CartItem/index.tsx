import type { CartItemType } from "../../../types";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import ProductQuantity from "../ProductQuantity";

import { Context as CartContext } from "../../../context/cartContext";

import formatPrice from "../../../utils/formatPrice";

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

  return (
    <>
      <div className="container">
        <div className="img-wrapper">
          <Image src={image} alt={name} layout="fill" objectFit="cover" />
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
            increment={() =>
              dispatch({ type: "increase_quantity", payload: id })
            }
            decrement={() =>
              dispatch({ type: "decrease_quantity", payload: id })
            }
            remove={() => dispatch({ type: "remove_item", payload: id })}
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
