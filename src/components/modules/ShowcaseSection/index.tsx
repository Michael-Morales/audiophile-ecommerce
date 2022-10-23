import PrimaryShowcaseCard from "../PrimaryShowcaseCard";
import SecondaryShowcaseCard from "../SecondaryShowcaseCard";
import TertiaryShowcaseCard from "../TertiaryShowcaseCard";

const ShowcaseSection = () => {
  return (
    <section className="my-24 flex flex-col gap-6 sm:gap-8 lg:gap-12">
      <PrimaryShowcaseCard />
      <SecondaryShowcaseCard />
      <TertiaryShowcaseCard />
    </section>
  );
};

export default ShowcaseSection;
