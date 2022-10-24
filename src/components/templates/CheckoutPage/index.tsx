import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import ContainerMargins from "../../layouts/ContainerMargins";
import BackButton from "../../elements/BackButton";
import CheckoutForm from "../../modules/CheckoutForm";

import { Context as CartContext } from "../../../context/cartContext";

const CheckoutPage = () => {
  const router = useRouter();
  const { state } = useContext(CartContext);

  useEffect(() => {
    if (state.length === 0) router.push("/");
  }, [router, state]);

  return (
    <main className="bg-light pt-[calc(5.625rem+1rem)] pb-[6.125rem] sm:pt-[calc(5.625rem+3rem)] sm:pb-[7.5rem] xl:pt-[calc(5.625rem+5rem)] xl:pb-[8.75rem]">
      <ContainerMargins>
        <>
          <BackButton />
          <CheckoutForm />
        </>
      </ContainerMargins>
    </main>
  );
};

export default CheckoutPage;
