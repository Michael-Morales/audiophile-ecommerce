import Link from "next/link";
import Image from "next/image";

import { colors } from "../../styles/theme";

type Props = {
  title: string;
  route: string;
  secondary?: boolean;
  light?: boolean;
  dark?: boolean;
};

const Button = ({ title, route, secondary, light, dark }: Props) => {
  return (
    <>
      <Link href={route}>
        <a>
          {title}
          {secondary && (
            <Image
              src="/images/icons/icon-arrow-right.svg"
              alt=""
              height={12}
              width={8}
              className="img"
            />
          )}
        </a>
      </Link>

      <style jsx>{`
        a {
          padding: 1rem 2rem;
          font-size: 0.87rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-decoration: none;
          text-transform: uppercase;
          transition: ease 0.3s;
        }
      `}</style>
      <style jsx>{`
        a {
          display: ${secondary ? "flex" : "inline-block"};
          align-items: ${secondary ? "center" : "unset"};
          gap: ${secondary ? "13px" : "unset"};
          color: ${light
            ? colors.black
            : secondary
            ? colors.secondaryButton
            : colors.white};
          background-color: ${light || secondary
            ? "transparent"
            : dark
            ? colors.black
            : colors.primary};
          border: ${light ? `1px solid ${colors.black}` : "none"};
        }

        a:hover {
          color: ${secondary ? colors.primary : colors.white};
          background-color: ${light
            ? colors.black
            : dark
            ? colors.darkHover
            : secondary
            ? "transparent"
            : colors.primaryHover};
        }
      `}</style>
    </>
  );
};

export default Button;
