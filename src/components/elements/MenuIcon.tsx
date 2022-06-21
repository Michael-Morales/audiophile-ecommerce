import { colors } from "../../styles/theme";

const MenuIcon = () => {
  return (
    <>
      <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
        <g fill="#FFF" fillRule="evenodd">
          <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
        </g>
      </svg>

      <style jsx>{`
        svg {
          cursor: pointer;
        }

        svg:hover path {
          fill: ${colors.primary};
          transition: fill ease 0.3s;
        }
      `}</style>
    </>
  );
};

export default MenuIcon;
