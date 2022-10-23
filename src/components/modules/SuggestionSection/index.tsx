import type { OtherProductType } from "../../../types";

import SuggestionCard from "../SuggestionCard";

type Props = {
  suggestions: Array<OtherProductType>;
};

const SuggestionSection = ({ suggestions }: Props) => {
  return (
    <section className="my-[7.5rem] lg:my-40">
      <h2 className="mb-10 text-center text-xl leading-xl tracking-2 sm:mb-14 sm:text-3xl sm:leading-3xl sm:tracking-4 lg:mb-16">
        you may also like
      </h2>
      <div className="flex flex-col gap-14 sm:flex-row sm:gap-2.5 lg:gap-[1.875rem]">
        {suggestions.map((suggestion) => (
          <SuggestionCard key={suggestion.name} suggestion={suggestion} />
        ))}
      </div>
    </section>
  );
};

export default SuggestionSection;
