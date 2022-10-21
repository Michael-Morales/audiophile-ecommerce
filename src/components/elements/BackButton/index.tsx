import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      className="mb-6 block capitalize opacity-50 transition hover:text-orange hover:opacity-100 xl:mb-14"
      onClick={() => router.back()}
    >
      go back
    </button>
  );
};

export default BackButton;
