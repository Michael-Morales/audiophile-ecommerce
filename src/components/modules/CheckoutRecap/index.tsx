import { useContext, useState } from "react";

import { Context as CartContext } from "../../../context/cartContext";

import CartItem from "../CartItem";

import formatPrice from "../../../utils/formatPrice";
import getTotalPrice from "../../../utils/getTotalPrice";

const CheckoutRecap = () => {
  const { state } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  const totalPrice = getTotalPrice(state) + 50;

  return (
    <div className="mb-6 flex flex-col overflow-hidden rounded-lg sm:mb-12 sm:flex-row">
      <div className="flex flex-col bg-light-grey p-6 sm:flex-1 sm:grow-[0.6]">
        <ul className="flex flex-col gap-4">
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
          <button
            className="mt-4 border-t border-solid border-pale-grey pt-3 text-[.75rem] font-bold opacity-50"
            onClick={() => setOpen(!open)}
          >
            {open ? "view less" : `and ${state.length - 1} other item(s)`}
          </button>
        )}
      </div>
      <div className="bg-dark py-4 px-6 sm:flex sm:flex-1 sm:grow-[0.4] sm:flex-col sm:justify-center sm:p-8">
        <p className="mb-2 text-base font-medium uppercase text-white opacity-50">
          grand total
        </p>
        <p className="text-lg font-bold text-white">
          {formatPrice(totalPrice)}
        </p>
      </div>
    </div>
  );
};

export default CheckoutRecap;
