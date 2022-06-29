import { useContext } from "react";
import Image from "next/image";

import ProductQuantity from "../ProductQuantity";

import { Context as CartContext } from "../../../context/cartContext";

import formatPrice from "../../../utils/formatPrice";

import { styles } from "./styles";

type Props = {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
};

const CartItem = ({ id, image, name, price, quantity }: Props) => {
  const { dispatch } = useContext(CartContext);

  return (
    <>
      <div className="container">
        <div className="img-wrapper">
          <Image src={image} alt="" layout="fill" objectFit="cover" />
        </div>
        <div className="informations">
          <p>{name}</p>
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
    </>
  );
};

export default CartItem;
