import Button from "../../elements/Button";
import Image from "../../elements/Image";

import useViewportWidth from "../../../hooks/useViewportWidth";

const SecondaryShowcaseCard = () => {
  const [width] = useViewportWidth();

  return (
    <div className="relative flex h-[320px] flex-col items-start justify-center gap-8 overflow-hidden rounded-lg px-6 sm:pl-[3.875rem] lg:pl-[5.938rem]">
      <div className="absolute top-0 left-0 -z-[1] h-full w-full">
        <Image
          mobile="mobile/image-speaker-zx7"
          tablet="tablet/image-speaker-zx7"
          desktop="desktop/image-speaker-zx7"
          alt="a speaker on a table"
          width={width}
          priority
        />
      </div>
      <h2 className="text-2xl leading-2xl tracking-6">zx7 speaker</h2>
      <Button title="see product" route="/product/zx7-speaker" type="light" />
    </div>
  );
};

export default SecondaryShowcaseCard;
