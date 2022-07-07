import Image from "next/image";

import Button from "../../elements/Button";
import CheckoutRecap from "../CheckoutRecap";

import checkoutImg from "../../../../public/images/icons/icon-order-confirmation.svg";

import { styles, dynamicStyles } from "./styles";

const CheckoutModal = () => {
  return (
    <>
      <div className="container">
        <Image src={checkoutImg} alt="" />
        <h2>
          thank you <br /> for your order
        </h2>
        <p>You will receive an email confirmation shortly.</p>
        <CheckoutRecap />
        <Button title="back to home" route="/" />
      </div>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default CheckoutModal;
