import TextInput from "../../elements/TextInput";

import { styles, dynamicStyles } from "./styles";

const CheckoutForm = () => {
  return (
    <>
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
              <TextInput title="card number" />
              <TextInput title="expiration date" />
              <TextInput title="CVC" />
            </div>
          </fieldset>
        </form>
      </div>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default CheckoutForm;
