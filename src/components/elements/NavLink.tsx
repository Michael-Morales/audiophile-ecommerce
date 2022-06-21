import Link from "next/link";

import { colors } from "../../styles/theme";

type Props = {
  name: string;
  route: string;
};

const NavLink = ({ name, route }: Props) => {
  return (
    <>
      <Link href={route}>
        <a>{name}</a>
      </Link>

      <style jsx>{`
        a {
          display: inline-block;
          font-size: 1.3rem;
          font-weight: 700;
          line-height: 2.5rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          transition: color ease 0.3s;
        }
      `}</style>
      <style jsx>{`
        a {
          color: ${colors.white};
        }

        a:hover {
          color: ${colors.primary};
        }
      `}</style>
    </>
  );
};

export default NavLink;
