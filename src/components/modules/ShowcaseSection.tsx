import PrimaryShowcaseCard from "./PrimaryShowcaseCard";
import SecondaryShowcaseCard from "./SecondaryShowcaseCard";
import TertiaryShowcaseCard from "./TertiaryShowcaseCard";

const ShowcaseSection = () => {
  return (
    <>
      <section>
        <PrimaryShowcaseCard />
        <SecondaryShowcaseCard />
        <TertiaryShowcaseCard />
      </section>

      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          gap: 2.4rem;
          margin: 9.6rem 2.4rem;
        }
      `}</style>
    </>
  );
};

export default ShowcaseSection;
