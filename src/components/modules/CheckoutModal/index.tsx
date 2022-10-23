import { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Button from "../../elements/Button";
import CheckoutRecap from "../CheckoutRecap";

import useLocalStorage from "../../../hooks/useLocalStorage";

import { Context as CartContext } from "../../../context/cartContext";

import checkoutImg from "../../../../public/images/icons/icon-order-confirmation.svg";

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
    <div className="fixed top-[calc(90px+24px)] left-1/2 z-[9999] max-h-[calc(100vh-90px-48px)] w-[calc(100%-24px*2)] max-w-[540px] -translate-x-1/2 overflow-y-auto rounded-lg bg-white p-6 sm:p-12">
      <Image src={checkoutImg} alt="" layout="fixed" />
      <h2 className="mt-6 mb-4 text-xl leading-[1.75rem] tracking-2 sm:text-3xl sm:leading-xl sm:tracking-4">
        thank you <br /> for your order
      </h2>
      <p className="mb-6 opacity-50 sm:mb-8">
        You will receive an email confirmation shortly.
      </p>
      <CheckoutRecap />
      <Button title="back to home" action={backToHome} fullWidth />
    </div>
  );
};

export default CheckoutModal;
