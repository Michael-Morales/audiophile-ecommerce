import type { FormValuesType } from "../../../types";

import { useContext } from "react";
import { useForm } from "react-hook-form";

import Fieldsets from "../Fieldsets";
import CartItem from "../CartItem";
import Button from "../../elements/Button";

import { Context as CartContext } from "../../../context/cartContext";

import formatPrice from "../../../utils/formatPrice";
import getTotalPrice from "../../../utils/getTotalPrice";

import { styles, dynamicStyles } from "./styles";

const CheckoutForm = () => {
  const { state } = useContext(CartContext);
  const { register, handleSubmit, watch } = useForm<FormValuesType>({
    defaultValues: {
      paymentMethod: "e-money",
    },
  });

  const totalPrice = getTotalPrice(state);

  const onSubmit = (data: FormValuesType) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <h1>checkout</h1>
          <Fieldsets register={register} watch={watch} />
        </div>

        <div className="container">
          <h2>summary</h2>
          <ul>
            {state.map((item) => (
              <li key={item.id}>
                <CartItem {...item} checkout />
              </li>
            ))}
          </ul>
          <div className="rate">
            <span>total</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <div className="rate">
            <span>shipping</span>
            <span>{formatPrice(50)}</span>
          </div>
          <div className="rate">
            <span>vat (included)</span>
            <span>{formatPrice(totalPrice * 0.2)}</span>
          </div>
          <div className="total-rate">
            <span>grand total</span>
            <span>{formatPrice(totalPrice + 50)}</span>
          </div>
          <Button
            title="continue &amp; pay"
            action={() => console.log("PAYING")}
          />
        </div>
      </form>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default CheckoutForm;
