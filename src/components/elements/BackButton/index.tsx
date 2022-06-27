import { useRouter } from "next/router";

import { styles, dynamicStyles } from "./styles";

const BackButton = () => {
  const router = useRouter();

  return (
    <>
      <button onClick={() => router.back()}>go back</button>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default BackButton;
