import type {
  UseFormRegister,
  RegisterOptions,
  FieldError,
} from "react-hook-form";
import type { FormValuesType } from "../../../types";

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
    <label className={`flex flex-col gap-2 ${size ? "sm:col-[1/3]" : ""}`}>
      <div className="flex justify-between">
        <span
          className={`text-[.75rem] font-bold capitalize leading-[1] ${
            error ? "text-red" : ""
          }`}
        >
          {label}
        </span>
        {error?.type === "required" && (
          <span className="text-[.75rem] font-bold capitalize leading-[1] text-red">
            required
          </span>
        )}
        {error?.type !== "required" && (
          <span className="text-[.75rem] font-bold capitalize leading-[1] text-red">
            {error?.message}
          </span>
        )}
      </div>
      <input
        className={`rounded-lg py-[1.125rem] px-6 text-sm font-bold leading-[1] focus:border-orange focus:ring-0 focus:ring-offset-0 ${
          error ? "border-2 border-red" : "border border-medium-grey"
        }`}
        type={inputType}
        {...register(formValue, options)}
      />
    </label>
  );
};

export default Input;
