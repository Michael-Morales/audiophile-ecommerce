import { useContext } from "react";

import { Context as CartContext } from "../../../context/cartContext";

import CartItem from "../CartItem";

import formatPrice from "../../../utils/formatPrice";
import getTotalPrice from "../../../utils/getTotalPrice";

import { styles, dynamicStyles } from "./styles";

const CheckoutRecap = () => {
  const { state } = useContext(CartContext);

  const totalPrice = getTotalPrice(state) + 50;

  return (
    <>
      <div className="container">
        <div className="items">
          {state.map((item) => (
            <CartItem key={item.id} {...item} checkout />
          ))}
        </div>
        <div className="footer">
          <p>grand total</p>
          <p>{formatPrice(totalPrice)}</p>
        </div>
      </div>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default CheckoutRecap;
