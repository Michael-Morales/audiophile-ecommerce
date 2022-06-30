import { useContext } from "react";

import TextInput from "../../elements/TextInput";
import CartItem from "../CartItem";
import Button from "../../elements/Button";

import { Context as CartContext } from "../../../context/cartContext";

import formatPrice from "../../../utils/formatPrice";
import getTotalPrice from "../../../utils/getTotalPrice";

import { styles, dynamicStyles } from "./styles";

const CheckoutForm = () => {
  const { state } = useContext(CartContext);

  const totalPrice = getTotalPrice(state);

  return (
    <>
      <div className="container-wrapper">
        <div className="container">
          <h1>checkout</h1>
          <form>
            <fieldset>
              <legend>billing details</legend>
              <div className="inputs-container">
                <TextInput title="name" />
                <TextInput title="email address" type="email" />
                <TextInput title="phone number" type="tel" />
              </div>
            </fieldset>
            <fieldset>
              <legend>shipping info</legend>
              <div className="inputs-container">
                <TextInput title="your address" />
                <TextInput title="ZIP code" />
                <TextInput title="city" />
                <TextInput title="country" />
              </div>
            </fieldset>
            <fieldset>
              <legend>payment details</legend>
              <div className="inputs-container">
                <TextInput title="e-money number" />
                <TextInput title="e-money PIN" />
              </div>
            </fieldset>
          </form>
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
      </div>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default CheckoutForm;
