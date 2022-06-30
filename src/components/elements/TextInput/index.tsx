import { styles, dynamicStyles } from "./styles";

type Props = {
  type?: string;
  title: string;
  width?: string;
  maxLength?: number;
};

const TextInput = ({ type = "text", title, width, maxLength }: Props) => {
  // ADD PATTERN DEPENDING ON INPUT TYPE

  return (
    <>
      <label>
        <span>{title}</span>
        <input type={type} maxLength={maxLength} />
      </label>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
      <style jsx>{`
        label {
          flex: ${width ? width : "unset"};
        }
      `}</style>
    </>
  );
};

export default TextInput;
