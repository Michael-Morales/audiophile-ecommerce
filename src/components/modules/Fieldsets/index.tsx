import type { UseFormRegister } from "react-hook-form";
import type { FormValuesType } from "../../../types";

import { styles, dynamicStyles } from "./styles";

type Props = {
  register: UseFormRegister<FormValuesType>;
};

const Fieldsets = ({ register }: Props) => {
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
            <label>
              <span>e-money number</span>
              <input type="text" {...register("eMoneyNumber")} />
            </label>
            <label>
              <span>e-money PIN</span>
              <input type="text" {...register("eMoneyPin")} />
            </label>
          </div>
        </fieldset>
      </div>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default Fieldsets;
