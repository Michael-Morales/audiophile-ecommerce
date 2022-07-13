import Link from "next/link";
import Image from "next/image";

import { styles } from "./styles";
import { colors } from "../../../styles/theme";

type Props = {
  title: string;
  route?: string;
  type?: keyof typeof buttonOptions;
  action?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
};

type ButtonOption = {
  color: string;
  backgroundColor: string;
  hoverColor: string;
  hoverBackgroundColor: string;
};

const buttonOptions: {
  primary: ButtonOption;
  secondary: ButtonOption;
  light: ButtonOption;
  dark: ButtonOption;
} = {
  primary: {
    color: colors.white,
    backgroundColor: colors.primary,
    hoverColor: colors.white,
    hoverBackgroundColor: colors.primaryHover,
  },
  secondary: {
    color: colors.secondaryButton,
    backgroundColor: "transparent",
    hoverColor: colors.primary,
    hoverBackgroundColor: "transparent",
  },
  light: {
    color: colors.black,
    backgroundColor: "transparent",
    hoverColor: colors.white,
    hoverBackgroundColor: colors.black,
  },
  dark: {
    color: colors.white,
    backgroundColor: colors.black,
    hoverColor: colors.white,
    hoverBackgroundColor: colors.darkHover,
  },
};

const Button = ({
  title,
  route,
  type = "primary",
  action,
  disabled,
  fullWidth,
}: Props) => {
  return (
    <>
      {route && (
        <Link href={route}>
          <a>
            {title}
            {type === "secondary" && (
              <Image
                src="/images/icons/icon-arrow-right.svg"
                alt=""
                height={12}
                width={8}
              />
            )}
          </a>
        </Link>
      )}
      {action && (
        <button onClick={action}>
          {title}
          {type === "secondary" && (
            <Image
              src="/images/icons/icon-arrow-right.svg"
              alt=""
              height={12}
              width={8}
            />
          )}
        </button>
      )}

      <style jsx>{styles}</style>
      <style jsx>{`
        a,
        button {
          gap: ${type === "secondary" ? "13px" : "unset"};
          width: ${fullWidth ? "100%" : "initial"};
          color: ${buttonOptions[type].color};
          background-color: ${disabled
            ? colors.primaryHover
            : buttonOptions[type].backgroundColor};
          border: ${type === "light" ? `1px solid ${colors.black}` : "none"};
          pointer-events: ${disabled ? "none" : "initial"};
        }

        a:hover,
        button:hover {
          color: ${buttonOptions[type].hoverColor};
          background-color: ${buttonOptions[type].hoverBackgroundColor};
        }
      `}</style>
    </>
  );
};

export default Button;
