import Link from "next/link";

import { styles, dynamicStyles } from "./styles";

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

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default NavLink;
