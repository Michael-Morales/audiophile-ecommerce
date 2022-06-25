import { useRouter } from "next/router";

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
        }
      `}</style>
    </>
  );
};

export default BackButton;
