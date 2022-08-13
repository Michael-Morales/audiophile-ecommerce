import type {
  UseFormRegister,
  RegisterOptions,
  FieldError,
} from "react-hook-form";
import type { FormValuesType } from "../../../types";

import { styles, dynamicStyles } from "./styles";

import { colors } from "../../../styles/theme";

type Props = {
  label: string;
  inputType?: string;
  register: UseFormRegister<FormValuesType>;
  formValue: keyof FormValuesType;
  options?: RegisterOptions;
  error: FieldError | undefined;
  size?: "fullWidth";
};

const Input = ({
  label,
  inputType = "text",
  register,
  formValue,
  options,
  error,
  size,
}: Props) => {
  return (
    <>
      <label>
        <div>
          <span>{label}</span>
          {error?.type === "required" && (
            <span className="error">required</span>
          )}
          {error?.type !== "required" && (
            <span className="error">{error?.message}</span>
          )}
        </div>
        <input type={inputType} {...register(formValue, options)} />
      </label>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
      <style jsx>{`
        div > span {
          color: ${error ? colors.error : "initial"};
        }

        input {
          border-color: ${error ? colors.error : colors.inputBorder};
          border-width: ${error ? "2px" : "1px"};
        }

        @media screen and (min-width: 600px) {
          label {
            grid-column: ${size ? "1 / 3" : "default"};
          }
        }
      `}</style>
    </>
  );
};

export default Input;
