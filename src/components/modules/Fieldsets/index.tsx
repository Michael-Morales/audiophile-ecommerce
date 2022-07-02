import type {
  UseFormRegister,
  UseFormWatch,
  FieldErrorsImpl,
  DeepRequired,
} from "react-hook-form";
import type { FormValuesType } from "../../../types";

import Image from "next/image";

import cashLogo from "../../../../public/images/icons/icon-cash-on-delivery.svg";

import { styles, dynamicStyles } from "./styles";

type Props = {
  register: UseFormRegister<FormValuesType>;
  watch: UseFormWatch<FormValuesType>;
  errors: FieldErrorsImpl<DeepRequired<FormValuesType>>;
};

const Fieldsets = ({ register, watch, errors }: Props) => {
  const paymentMethod = watch("paymentMethod");

  console.log(errors);

  return (
    <>
      <div className="container">
        <fieldset>
          <legend>billing details</legend>
          <div className="inputs-container">
            <label>
              <div>
                <span>name</span>
                {errors.name && <span className="error">required</span>}
              </div>
              <input
                type="text"
                {...register("name", {
                  required: true,
                })}
              />
            </label>
            <label>
              <div>
                <span>email address</span>
                {errors.email?.type === "required" && (
                  <span className="error">required</span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="error">{errors.email?.message}</span>
                )}
              </div>
              <input
                type="email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid e-mail format.",
                  },
                })}
              />
            </label>
            <label>
              <div>
                <span>phone number</span>
                {errors.phone && <span className="error">required</span>}
              </div>
              <input
                type="tel"
                {...register("phone", {
                  required: true,
                })}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend>shipping info</legend>
          <div className="inputs-container">
            <label>
              <div>
                <span>your address</span>
                {errors.address && <span className="error">required</span>}
              </div>
              <input
                type="text"
                {...register("address", {
                  required: true,
                })}
              />
            </label>
            <label>
              <div>
                <span>ZIP code</span>
                {errors.zip && <span className="error">required</span>}
              </div>
              <input
                type="text"
                {...register("zip", {
                  required: true,
                })}
              />
            </label>
            <label>
              <div>
                <span>city</span>
                {errors.city && <span className="error">required</span>}
              </div>
              <input
                type="text"
                {...register("city", {
                  required: true,
                })}
              />
            </label>
            <label>
              <div>
                <span>country</span>
                {errors.country && <span className="error">required</span>}
              </div>
              <input
                type="text"
                {...register("country", {
                  required: true,
                })}
              />
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
                  <div>
                    <span>e-money number</span>
                    {errors.eMoneyNumber && (
                      <span className="error">required</span>
                    )}
                  </div>
                  <input
                    type="text"
                    {...register("eMoneyNumber", {
                      required: true,
                    })}
                  />
                </label>
                <label>
                  <div>
                    <span>e-money PIN</span>
                    {errors.eMoneyPin && (
                      <span className="error">required</span>
                    )}
                  </div>
                  <input
                    type="text"
                    {...register("eMoneyPin", {
                      required: true,
                    })}
                  />
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
      <style jsx>{``}</style>
    </>
  );
};

export default Fieldsets;
