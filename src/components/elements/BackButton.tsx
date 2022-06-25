import { useRouter } from "next/router";

import { colors } from "../../styles/theme";

const BackButton = () => {
  const router = useRouter();

  return (
    <>
      <button onClick={() => router.back()}>go back</button>

      <style jsx>{`
        button {
          display: block;
          padding: 0;
          margin-bottom: 2.4rem;
          background-color: unset;
          border: unset;
          outline: none;
          text-transform: capitalize;
          opacity: 0.5;
          cursor: pointer;
          transition: ease 0.3s;
        }
      `}</style>
      <style jsx>{`
        button:hover {
          color: ${colors.primary};
          opacity: 1;
        }
      `}</style>
    </>
  );
};

export default BackButton;
