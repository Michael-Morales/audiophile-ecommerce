import Link from "next/link";

import { colors } from "../../styles/theme";

const Button = () => {
  return (
    <>
      <Link href="/">
        <a>see product</a>
      </Link>

      <style jsx>{`
        a {
          padding: 1rem 2rem;
          font-size: 0.87rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-decoration: none;
          text-transform: uppercase;
          transition: background-color ease-out 0.3s;
        }
      `}</style>
      <style jsx>{`
        a {
          color: ${colors.white};
          background-color: ${colors.primary};
        }

        a:hover {
          background-color: ${colors.primaryHover};
        }
      `}</style>
    </>
  );
};

export default Button;
