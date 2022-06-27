import type { OtherProductType } from "../../types";

import SuggestionCard from "./SuggestionCard";

import { sizes } from "../../styles/theme";

type Props = {
  suggestions: Array<OtherProductType>;
};

const SuggestionSection = ({ suggestions }: Props) => {
  return (
    <>
      <section>
        <h2>you may also like</h2>
        <div>
          {suggestions.map((suggestion) => (
            <SuggestionCard key={suggestion.name} suggestion={suggestion} />
          ))}
        </div>
      </section>

      <style jsx>{`
        section {
          margin-block: 12rem;
        }

        h2 {
          margin-bottom: 4rem;
          text-align: center;
        }

        div {
          display: flex;
          flex-direction: column;
          gap: 5.6rem;
        }

        @media screen and (min-width: 600px) {
          h2 {
            margin-bottom: 5.6rem;
          }

          div {
            flex-direction: row;
            gap: 1rem;
          }
        }

        @media screen and (min-width: 1240px) {
          section {
            margin-block: 16rem;
          }

          h2 {
            margin-bottom: 6.4rem;
          }

          div {
            gap: 3rem;
          }
        }
      `}</style>
      <style jsx>{`
        h2 {
          font-size: ${sizes.mobile.text.h4};
        }

        @media screen and (min-width: 600px) {
          h2 {
            font-size: ${sizes.desktop.text.h3};
          }
        }
      `}</style>
    </>
  );
};

export default SuggestionSection;
