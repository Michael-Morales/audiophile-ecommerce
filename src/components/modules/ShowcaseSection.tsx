import PrimaryShowcaseCard from "./PrimaryShowcaseCard";
import SecondaryShowcaseCard from "./SecondaryShowcaseCard";

const ShowcaseSection = () => {
  return (
    <>
      <section>
        <PrimaryShowcaseCard />
        <SecondaryShowcaseCard />
      </section>

      <style jsx>{`
        section {
          margin: 9.6rem 2.4rem;
        }
      `}</style>
    </>
  );
};

export default ShowcaseSection;
