import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import ContainerMargins from "../../layouts/ContainerMargins";
import BackButton from "../../elements/BackButton";
import CheckoutForm from "../../modules/CheckoutForm";

import { Context as CartContext } from "../../../context/cartContext";

import { styles, dynamicStyles } from "./styles";

const CheckoutPage = () => {
  const router = useRouter();
  const { state } = useContext(CartContext);

  useEffect(() => {
    if (state.length === 0) router.push("/");
  }, [router, state]);

  return (
    <>
      <main>
        <ContainerMargins>
          <>
            <BackButton />
            <CheckoutForm />
          </>
        </ContainerMargins>
      </main>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default CheckoutPage;
