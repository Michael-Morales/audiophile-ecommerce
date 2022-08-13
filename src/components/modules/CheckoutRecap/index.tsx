import { useContext, useState } from "react";

import { Context as CartContext } from "../../../context/cartContext";

import CartItem from "../CartItem";

import formatPrice from "../../../utils/formatPrice";
import getTotalPrice from "../../../utils/getTotalPrice";

import { styles, dynamicStyles } from "./styles";

const CheckoutRecap = () => {
  const { state } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  const totalPrice = getTotalPrice(state) + 50;

  return (
    <>
      <div className="container">
        <div className="items">
          <ul>
            <li>
              <CartItem {...state[0]} checkout />
            </li>
            {open &&
              state.slice(1).map((item) => (
                <li key={item.id}>
                  <CartItem {...item} checkout />
                </li>
              ))}
          </ul>
          {state.length > 1 && (
            <button onClick={() => setOpen(!open)}>
              {open ? "view less" : `and ${state.length - 1} other item(s)`}
            </button>
          )}
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
