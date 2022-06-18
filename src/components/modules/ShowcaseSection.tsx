import PrimaryShowcaseCard from "./PrimaryShowcaseCard";

const ShowcaseSection = () => {
  return (
    <>
      <section>
        <PrimaryShowcaseCard />
      </section>

      <style jsx>{`
        section {
          margin: 1.6rem;
        }
      `}</style>
    </>
  );
};

export default ShowcaseSection;
