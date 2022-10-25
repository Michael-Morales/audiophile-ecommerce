import type { OtherProductType } from "../../../types";

import Button from "../../elements/Button";
import Image from "../../elements/Image";

import useViewportWidth from "../../../hooks/useViewportWidth";

type Props = {
  suggestion: OtherProductType;
};

const SuggestionCard = ({ suggestion }: Props) => {
  const [width] = useViewportWidth();
  const { slug, name, image } = suggestion;

  return (
    <div className="flex w-full flex-col gap-8 sm:gap-10">
      <div className="relative h-[120px] w-full overflow-hidden rounded-lg bg-pale-grey sm:h-[318px]">
        <Image
          mobile={image.mobile}
          tablet={image.tablet}
          desktop={image.desktop}
          alt={name}
          width={width}
        />
      </div>
      <div className="flex flex-col items-center gap-8">
        <p className="text-xl font-bold tracking-5">{name}</p>
        <Button title="see product" route={`/product/${slug}`} />
      </div>
    </div>
  );
};

export default SuggestionCard;
