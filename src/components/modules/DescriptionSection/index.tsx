import Image from "../../elements/Image";

import useViewportWidth from "../../../hooks/useViewportWidth";

const DescriptionSection = () => {
  const [width] = useViewportWidth();

  return (
    <section className="my-[7.5rem] flex flex-col gap-10 sm:gap-16 lg:my-40 lg:flex-row lg:gap-[1.875rem]">
      <div className="overflow-hidden rounded-lg lg:order-2 lg:basis-1/2">
        <div className="relative h-[300px] bg-pale-grey lg:h-[588px]">
          <Image
            mobile="mobile/image-best-gear"
            tablet="tablet/image-best-gear"
            desktop="desktop/image-best-gear"
            alt="a man listening to music with headphones"
            width={width}
          />
        </div>
      </div>
      <div className="self-center text-center sm:w-4/5 lg:basis-1/2 lg:text-left">
        <h2 className="mb-8 text-2xl leading-2xl tracking-6 sm:text-4xl sm:leading-3xl sm:tracking-4 lg:max-w-[445px]">
          bringing you the <span className="text-orange">best</span> audio gear
        </h2>
        <p className="opacity-50 lg:max-w-[445px]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default DescriptionSection;
