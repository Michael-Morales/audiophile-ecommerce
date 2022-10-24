import type { CartItemType } from "../../../types";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import ProductQuantity from "../ProductQuantity";

import useLocalStorage from "../../../hooks/useLocalStorage";

import { Context as CartContext } from "../../../context/cartContext";

import formatPrice from "../../../utils/formatPrice";
import getImgURL from "../../../utils/getImgURL";

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
    <div className="flex items-center">
      <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-pale-grey">
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
      <div className="ml-4 mr-auto">
        <Link href={`/product/${slug}`}>
          <a className="font-bold text-black">{name}</a>
        </Link>
        <p className="text-sm font-bold opacity-50">{formatPrice(price)}</p>
      </div>
      {checkout ? (
        <span className="font-bold opacity-50">x{quantity}</span>
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
  );
};

export default CartItem;
