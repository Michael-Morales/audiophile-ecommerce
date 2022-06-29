import type { CartItemType } from "../../../types";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import ProductQuantity from "../ProductQuantity";

import { Context as CartContext } from "../../../context/cartContext";

import formatPrice from "../../../utils/formatPrice";

import { styles, dynamicStyles } from "./styles";

type Props = CartItemType;

const CartItem = ({ id, image, name, price, quantity, slug }: Props) => {
  const { dispatch } = useContext(CartContext);

  return (
    <>
      <div className="container">
        <div className="img-wrapper">
          <Image src={image} alt="" layout="fill" objectFit="cover" />
        </div>
        <div className="informations">
          <Link href={`/product/${slug}`}>
            <a>{name}</a>
          </Link>
          <p className="price">{formatPrice(price)}</p>
        </div>
        <ProductQuantity
          quantity={quantity}
          increment={() => dispatch({ type: "increase_quantity", payload: id })}
          decrement={() => dispatch({ type: "decrease_quantity", payload: id })}
          small
        />
      </div>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default CartItem;
