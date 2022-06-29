import { useContext } from "react";

import Button from "../../elements/Button";
import CartItem from "../CartItem";

import { Context as CartContext } from "../../../context/cartContext";

import formatPrice from "../../../utils/formatPrice";

import { styles, dynamicStyles } from "./styles";

const CartModal = () => {
  const { state, dispatch } = useContext(CartContext);

  const totalPrice = state
    .map(({ price, quantity }) => price * quantity)
    .reduce((a, b) => a + b, 0);

  return (
    <>
      <div className="container">
        <div className="header">
          <p>cart ({state.length})</p>
          <button onClick={() => dispatch({ type: "remove_all" })}>
            remove all
          </button>
        </div>
        {!state.length ? (
          <div className="empty">your cart is empty</div>
        ) : (
          <ul>
            {state.map((item) => (
              <li key={item.id}>
                <CartItem {...item} />
              </li>
            ))}
          </ul>
        )}
        <div className="footer">
          <p>total</p>
          <p className="price">{formatPrice(totalPrice)}</p>
        </div>
        <Button
          title="checkout"
          route="/checkout"
          disabled={state.length === 0}
        />
      </div>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default CartModal;
