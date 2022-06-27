import type { OtherProductType } from "../../../types";

import SuggestionCard from "../SuggestionCard";

import { styles, dynamicStyles } from "./styles";

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

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default SuggestionSection;
