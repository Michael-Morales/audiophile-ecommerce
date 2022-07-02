import type {
  UseFormRegister,
  UseFormWatch,
  FieldErrorsImpl,
  DeepRequired,
} from "react-hook-form";
import type { FormValuesType } from "../../../types";

import Image from "next/image";

import Input from "../Input";

import cashLogo from "../../../../public/images/icons/icon-cash-on-delivery.svg";

import { styles, dynamicStyles } from "./styles";

type Props = {
  register: UseFormRegister<FormValuesType>;
  watch: UseFormWatch<FormValuesType>;
  errors: FieldErrorsImpl<DeepRequired<FormValuesType>>;
};

const Fieldsets = ({ register, watch, errors }: Props) => {
  const paymentMethod = watch("paymentMethod");

  return (
    <>
      <div className="container">
        <fieldset>
          <legend>billing details</legend>
          <div className="inputs-container">
            <Input
              label="name"
              register={register}
              formValue="name"
              options={{
                required: true,
              }}
              error={errors.name}
            />
            <Input
              label="email address"
              inputType="email"
              register={register}
              formValue="email"
              options={{
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid e-mail format",
                },
              }}
              error={errors.email}
            />
            <Input
              label="phone number"
              inputType="tel"
              register={register}
              formValue="phone"
              options={{
                required: true,
                minLength: {
                  value: 6,
                  message: "Must be at least 6 numbers",
                },
              }}
              error={errors.phone}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>shipping info</legend>
          <div className="inputs-container">
            <Input
              label="your address"
              register={register}
              formValue="address"
              options={{
                required: true,
              }}
              error={errors.address}
              size="fullWidth"
            />
            <Input
              label="ZIP code"
              register={register}
              formValue="zip"
              options={{
                required: true,
              }}
              error={errors.zip}
            />
            <Input
              label="city"
              register={register}
              formValue="city"
              options={{
                required: true,
              }}
              error={errors.city}
            />
            <Input
              label="country"
              register={register}
              formValue="country"
              options={{
                required: true,
              }}
              error={errors.country}
            />
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
                <Input
                  label="e-money number"
                  register={register}
                  formValue="eMoneyNumber"
                  options={{
                    required: true,
                    pattern: {
                      value: /[0-9]{10}/,
                      message: "Must be 10 numbers",
                    },
                  }}
                  error={errors.eMoneyNumber}
                />
                <Input
                  label="e-money PIN"
                  register={register}
                  formValue="eMoneyPin"
                  options={{
                    required: true,
                    pattern: {
                      value: /[0-9]{4}/,
                      message: "Must be 4 numbers",
                    },
                  }}
                  error={errors.eMoneyPin}
                />
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
