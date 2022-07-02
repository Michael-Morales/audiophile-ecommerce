import type { UseFormRegister, UseFormWatch } from "react-hook-form";
import type { FormValuesType } from "../../../types";

import Image from "next/image";

import cashLogo from "../../../../public/images/icons/icon-cash-on-delivery.svg";

import { styles, dynamicStyles } from "./styles";

type Props = {
  register: UseFormRegister<FormValuesType>;
  watch: UseFormWatch<FormValuesType>;
};

const Fieldsets = ({ register, watch }: Props) => {
  const paymentMethod = watch("paymentMethod");

  return (
    <>
      <div className="container">
        <fieldset>
          <legend>billing details</legend>
          <div className="inputs-container">
            <label>
              <span>name</span>
              <input type="text" {...register("name")} />
            </label>
            <label>
              <span>email address</span>
              <input type="email" {...register("email")} />
            </label>
            <label>
              <span>phone number</span>
              <input type="tel" {...register("phone")} />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend>shipping info</legend>
          <div className="inputs-container">
            <label>
              <span>your address</span>
              <input type="text" {...register("address")} />
            </label>
            <label>
              <span>ZIP code</span>
              <input type="text" {...register("zip")} />
            </label>
            <label>
              <span>city</span>
              <input type="text" {...register("city")} />
            </label>
            <label>
              <span>country</span>
              <input type="text" {...register("country")} />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend>payment details</legend>
          <div className="inputs-container">
            <div className="radio-container">
              <span>payment method</span>
              <div className="radio-options">
                <label>
                  <input
                    type="radio"
                    {...register("paymentMethod")}
                    value="e-money"
                  />
                  e-money
                </label>
                <label>
                  <input
                    type="radio"
                    {...register("paymentMethod")}
                    value="cash on delivery"
                  />
                  cash on delivery
                </label>
              </div>
            </div>
            {paymentMethod === "e-money" && (
              <>
                <label>
                  <span>e-money number</span>
                  <input type="text" {...register("eMoneyNumber")} />
                </label>
                <label>
                  <span>e-money PIN</span>
                  <input type="text" {...register("eMoneyPin")} />
                </label>
              </>
            )}
            {paymentMethod === "cash on delivery" && (
              <div className="cash-on-delivery">
                <Image src={cashLogo} alt="" />
                <p>
                  The &apos;Cash on Delivery&apos; option enables you to pay in
                  cash when our delivery courier arrives at your residence. Just
                  make sure your address is correct so that your order will not
                  be cancelled.
                </p>
              </div>
            )}
          </div>
        </fieldset>
      </div>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default Fieldsets;
