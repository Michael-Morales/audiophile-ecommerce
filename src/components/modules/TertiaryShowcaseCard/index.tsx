import Button from "../../elements/Button";
import Image from "../../elements/Image";

import useViewportWidth from "../../../hooks/useViewportWidth";

const TertiaryShowcaseCard = () => {
  const [width] = useViewportWidth();

  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:gap-2.5 lg:gap-[1.875rem]">
      <div className="relative h-[200px] overflow-hidden rounded-lg sm:h-[320px] sm:flex-1 sm:basis-1/2">
        <Image
          mobile="mobile/image-earphones-yx1"
          tablet="tablet/image-earphones-yx1"
          desktop="desktop/image-earphones-yx1"
          alt="earphones in a charging pod"
          width={width}
          priority
        />
      </div>
      <div className="flex h-[200px] flex-col items-start justify-center gap-8 rounded-lg bg-light-grey px-6 sm:h-[320px] sm:flex-1 sm:basis-1/2 sm:px-10 lg:pl-[5.938rem]">
        <h2 className="text-2xl leading-2xl tracking-6">yx1 earphones</h2>
        <Button
          title="see product"
          route="/product/yx1-earphones"
          type="light"
        />
      </div>
    </div>
  );
};

export default TertiaryShowcaseCard;
