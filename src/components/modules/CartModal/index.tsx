import { useContext } from "react";

import Button from "../../elements/Button";
import CartItem from "../CartItem";

import useLocalStorage from "../../../hooks/useLocalStorage";

import { Context as CartContext } from "../../../context/cartContext";

import formatPrice from "../../../utils/formatPrice";
import getTotalPrice from "../../../utils/getTotalPrice";

const CartModal = () => {
  const [, removeAllItems] = useLocalStorage();
  const { state, dispatch } = useContext(CartContext);

  const totalPrice = getTotalPrice(state);

  const handleRemoveAll = () => {
    removeAllItems();

    dispatch({ type: "remove_all" });
  };

  return (
    <div className="fixed top-6 right-6 z-[9999] mt-[5.625rem] w-[calc(100%-24px*2)] max-w-[377px] rounded-lg bg-white py-8 px-7 sm:right-10 sm:p-8 md:right-[calc((100%-840px)/2)] lg:right-[200px] xl:right-[calc((100%-1110px)/2)]">
      <div className="mb-8 flex items-center justify-between">
        <p className="text-lg font-bold uppercase tracking-3">
          cart ({state.length})
        </p>
        <button
          className="underline opacity-50 transition first-letter:uppercase hover:text-orange hover:opacity-100"
          onClick={handleRemoveAll}
        >
          remove all
        </button>
      </div>
      {!state.length ? (
        <div className="mb-8 flex justify-center uppercase tracking-3 opacity-50">
          your cart is empty
        </div>
      ) : (
        <ul className="mb-8 flex max-h-[calc(100vh-403px)] flex-col gap-6 overflow-y-auto">
          {state.map((item) => (
            <li key={item.id}>
              <CartItem {...item} />
            </li>
          ))}
        </ul>
      )}
      <div className="mb-6 flex items-center justify-between">
        <p className="uppercase opacity-50">total</p>
        <p className="text-lg font-bold">{formatPrice(totalPrice)}</p>
      </div>
      <Button
        title="checkout"
        route="/checkout"
        disabled={state.length === 0}
      />
    </div>
  );
};

export default CartModal;
