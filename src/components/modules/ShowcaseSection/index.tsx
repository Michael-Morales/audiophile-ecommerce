import PrimaryShowcaseCard from "../PrimaryShowcaseCard";
import SecondaryShowcaseCard from "../SecondaryShowcaseCard";
import TertiaryShowcaseCard from "../TertiaryShowcaseCard";

import { styles } from "./styles";

const ShowcaseSection = () => {
  return (
    <>
      <section>
        <PrimaryShowcaseCard />
        <SecondaryShowcaseCard />
        <TertiaryShowcaseCard />
      </section>

      <style jsx>{styles}</style>
    </>
  );
};

export default ShowcaseSection;
