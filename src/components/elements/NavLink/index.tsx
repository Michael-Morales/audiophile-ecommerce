import Link from "next/link";

type Props = {
  name: string;
  route: string;
};

const NavLink = ({ name, route }: Props) => {
  return (
    <Link href={route}>
      <a className="inline-block text-xs font-bold uppercase leading-2xl tracking-6 text-white transition-colors hover:text-orange">
        {name}
      </a>
    </Link>
  );
};

export default NavLink;
