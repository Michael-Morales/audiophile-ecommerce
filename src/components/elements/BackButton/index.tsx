import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();

  return (
    <>
      <button
        className="block mb-6 capitalize opacity-50 hover:opacity-100 hover:text-orange transition xl:mb-14"
        onClick={() => router.back()}
      >
        go back
      </button>
    </>
  );
};

export default BackButton;
