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
      `}</style>
      <style jsx>{`
        h2 {
          font-size: ${sizes.mobile.text.h4};
        }
      `}</style>
    </>
  );
};

export default SuggestionSection;
