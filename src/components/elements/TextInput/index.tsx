import { styles, dynamicStyles } from "./styles";

type Props = {
  type?: string;
  title: string;
};

const TextInput = ({ type = "text", title }: Props) => {
  // ADD PATTERN DEPENDING ON INPUT TYPE

  return (
    <>
      <label>
        <span>{title}</span>
        <input type={type} />
      </label>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default TextInput;
