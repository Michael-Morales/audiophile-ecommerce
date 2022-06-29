import ContainerMargins from "../../layouts/ContainerMargins";
import BackButton from "../../elements/BackButton";
import CheckoutForm from "../../modules/CheckoutForm";

import { styles, dynamicStyles } from "./styles";

const CheckoutPage = () => {
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
