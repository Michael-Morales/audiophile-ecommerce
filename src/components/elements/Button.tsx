import Link from "next/link";
import Image from "next/image";

import { colors } from "../../styles/theme";

type Props = {
  title: string;
  route: string;
  type?: keyof typeof buttonOptions;
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

const Button = ({ title, route, type = "primary" }: Props) => {
  return (
    <>
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

      <style jsx>{`
        a {
          padding: 1.5rem 3rem;
          font-size: 1.3rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-decoration: none;
          text-transform: uppercase;
          transition: ease 0.3s;
        }
      `}</style>
      <style jsx>{`
        a {
          display: ${type === "secondary" ? "flex" : "inline-block"};
          align-items: ${type === "secondary" ? "center" : "unset"};
          gap: ${type === "secondary" ? "13px" : "unset"};
          color: ${buttonOptions[type].color};
          background-color: ${buttonOptions[type].backgroundColor};
          border: ${type === "light" ? `1px solid ${colors.black}` : "none"};
        }

        a:hover {
          color: ${buttonOptions[type].hoverColor};
          background-color: ${buttonOptions[type].hoverBackgroundColor};
        }
      `}</style>
    </>
  );
};

export default Button;
