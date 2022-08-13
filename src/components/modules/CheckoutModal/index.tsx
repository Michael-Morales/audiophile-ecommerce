import { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Button from "../../elements/Button";
import CheckoutRecap from "../CheckoutRecap";

import useLocalStorage from "../../../hooks/useLocalStorage";

import { Context as CartContext } from "../../../context/cartContext";

import checkoutImg from "../../../../public/images/icons/icon-order-confirmation.svg";

import { styles, dynamicStyles } from "./styles";

const CheckoutModal = () => {
  const router = useRouter();
  const { dispatch } = useContext(CartContext);
  const [, removeAllItems] = useLocalStorage();

  const backToHome = async () => {
    removeAllItems();

    await router.replace("/");

    dispatch({ type: "remove_all" });
  };

  return (
    <>
      <div className="container">
        <Image src={checkoutImg} alt="" layout="fixed" />
        <h2>
          thank you <br /> for your order
        </h2>
        <p>You will receive an email confirmation shortly.</p>
        <CheckoutRecap />
        <Button title="back to home" action={backToHome} fullWidth />
      </div>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default CheckoutModal;
