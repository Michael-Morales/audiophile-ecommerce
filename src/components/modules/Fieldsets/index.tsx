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

type Props = {
  register: UseFormRegister<FormValuesType>;
  watch: UseFormWatch<FormValuesType>;
  errors: FieldErrorsImpl<DeepRequired<FormValuesType>>;
};

const Fieldsets = ({ register, watch, errors }: Props) => {
  const paymentMethod = watch("paymentMethod");

  return (
    <div className="flex flex-col gap-14">
      <fieldset>
        <legend className="mb-4 text-xs font-bold uppercase leading-normal text-orange">
          billing details
        </legend>
        <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:grid-rows-[1fr] sm:gap-x-4">
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
                message: "Invalid email format",
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
        <legend className="mb-4 text-xs font-bold uppercase leading-normal text-orange">
          shipping info
        </legend>
        <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:grid-rows-[1fr] sm:gap-x-4">
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
        <legend className="mb-4 text-xs font-bold uppercase leading-normal text-orange">
          payment details
        </legend>
        <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:grid-rows-[1fr] sm:gap-x-4">
          <div className="flex flex-col gap-4 sm:col-[1/3] sm:flex-row sm:justify-between">
            <span className="text-[.75rem] font-bold capitalize leading-[1] sm:flex-1">
              payment method
            </span>
            <div className="flex flex-col gap-4 sm:flex-1">
              <label className="flex items-center gap-4 rounded-lg border border-solid border-medium-grey p-[1.125rem] text-sm font-bold capitalize leading-[1] transition">
                <input
                  className="h-5 w-5 border-medium-grey text-orange transition focus:ring-1 focus:ring-orange"
                  type="radio"
                  {...register("paymentMethod")}
                  value="e-money"
                />
                e-money
              </label>
              <label className="flex items-center gap-4 rounded-lg border border-solid border-medium-grey p-[1.125rem] text-sm font-bold capitalize leading-[1] transition">
                <input
                  className="h-5 w-5 border-medium-grey text-orange transition focus:ring-1 focus:ring-orange"
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
            <div className="flex flex-col items-center gap-4 sm:col-[1/3] sm:flex-row sm:gap-8">
              <Image src={cashLogo} alt="" />
              <p className="opacity-50 sm:flex-1">
                The &apos;Cash on Delivery&apos; option enables you to pay in
                cash when our delivery courier arrives at your residence. Just
                make sure your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          )}
        </div>
      </fieldset>
    </div>
  );
};

export default Fieldsets;
