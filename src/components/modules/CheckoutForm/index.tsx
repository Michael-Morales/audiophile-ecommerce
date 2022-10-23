import type { FormValuesType } from "../../../types";

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import Fieldsets from "../Fieldsets";
import CartItem from "../CartItem";
import Button from "../../elements/Button";
import Modal from "../Modal";
import CheckoutModal from "../CheckoutModal";

import { Context as CartContext } from "../../../context/cartContext";

import formatPrice from "../../../utils/formatPrice";
import getTotalPrice from "../../../utils/getTotalPrice";

const CheckoutForm = () => {
  const { state } = useContext(CartContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValuesType>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      zip: "",
      city: "",
      country: "",
      paymentMethod: "e-money",
      eMoneyNumber: "",
      eMoneyPin: "",
    },
  });
  const [showModal, setShowModal] = useState(false);

  const totalPrice = getTotalPrice(state);

  const onSubmit = () => {
    setShowModal(true);
  };

  return (
    <form
      className="flex flex-col gap-8 xl:flex-row xl:items-start xl:gap-[1.875rem]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="rounded-lg bg-white py-[1.875rem] px-6 sm:px-7 xl:flex-1 xl:grow-[2] xl:px-12 xl:pb-12 xl:pt-[3.375rem]">
        <h1 className="mb-8 text-2xl leading-3xl tracking-4 sm:mb-10 sm:leading-4xl sm:tracking-6">
          checkout
        </h1>
        <Fieldsets register={register} watch={watch} errors={errors} />
      </div>

      <div className="flex flex-col rounded-lg bg-white py-[1.875rem] px-6 sm:px-7 xl:flex-1 xl:p-8">
        <h2 className="mb-8 text-lg leading-xl tracking-3">summary</h2>
        <ul className="mb-8 flex flex-col gap-6">
          {state.map((item) => (
            <li key={item.id}>
              <CartItem {...item} checkout />
            </li>
          ))}
        </ul>
        <div className="mb-2 flex items-center justify-between">
          <span className="uppercase opacity-50">total</span>
          <span className="text-lg font-bold">{formatPrice(totalPrice)}</span>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <span className="uppercase opacity-50">shipping</span>
          <span className="text-lg font-bold">{formatPrice(50)}</span>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <span className="uppercase opacity-50">vat (included)</span>
          <span className="text-lg font-bold">
            {formatPrice(totalPrice * 0.2)}
          </span>
        </div>
        <div className="mt-6 mb-8 flex items-center justify-between">
          <span className="uppercase opacity-50">grand total</span>
          <span className="text-lg font-bold">
            {formatPrice(totalPrice + 50)}
          </span>
        </div>
        <Button title="continue &amp; pay" action={() => {}} />
        <Modal show={showModal} onClose={() => {}}>
          <CheckoutModal />
        </Modal>
      </div>
    </form>
  );
};

export default CheckoutForm;
