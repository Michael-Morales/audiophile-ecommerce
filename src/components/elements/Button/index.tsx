import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  route?: string;
  type?: "primary" | "secondary" | "light" | "dark";
  action?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
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
          <a
            className={`flex content-center items-center py-4 px-8  text-xs font-bold uppercase tracking-1 transition  ${
              type === "primary"
                ? "bg-orange text-white hover:bg-pale-orange"
                : ""
            } ${
              type === "secondary"
                ? "gap-x-3 bg-transparent text-pale-grey hover:bg-transparent hover:text-orange"
                : ""
            } ${
              type === "light"
                ? "border border-solid border-black bg-transparent text-black hover:bg-black hover:text-white"
                : ""
            } ${
              type === "dark" ? "bg-black text-white hover:bg-dark-grey" : ""
            } ${fullWidth ? "w-full" : ""} ${
              disabled ? "pointer-events-none bg-pale-orange" : ""
            }`}
          >
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
        <button
          className={`flex content-center items-center py-4 px-8  text-xs font-bold uppercase tracking-1 transition  ${
            type === "primary"
              ? "bg-orange text-white hover:bg-pale-orange"
              : ""
          } ${
            type === "secondary"
              ? "gap-x-3 bg-transparent text-pale-grey hover:bg-transparent hover:text-orange"
              : ""
          } ${
            type === "light"
              ? "border border-solid border-black bg-transparent text-black hover:bg-black hover:text-white"
              : ""
          } ${
            type === "dark" ? "bg-black text-white hover:bg-dark-grey" : ""
          } ${fullWidth ? "w-full" : ""} ${
            disabled ? "pointer-events-none bg-pale-orange" : ""
          }`}
          onClick={action}
        >
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
    </>
  );
};

export default Button;
