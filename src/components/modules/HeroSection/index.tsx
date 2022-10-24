import Button from "../../elements/Button";
import Image from "../../elements/Image";

import useViewportWidth from "../../../hooks/useViewportWidth";

const Hero = () => {
  const [width] = useViewportWidth();

  return (
    <div className="flex h-screen flex-col items-center justify-center pt-[5.625rem] text-center text-white lg:items-start lg:pt-24 lg:text-left">
      <div className="absolute inset-0 -z-[1]">
        <Image
          mobile="mobile/image-header"
          tablet="tablet/image-header"
          desktop="desktop/image-header"
          alt="black headphones"
          width={width}
          priority
        />
      </div>
      <p className="mb-4 text-sm font-normal uppercase leading-tight tracking-extra opacity-50 sm:mb-6">
        new product
      </p>
      <h1 className="mb-6 max-w-[400px] text-4xl leading-3xl tracking-4 sm:text-5xl sm:leading-4xl sm:tracking-6">
        XX99 mark II headphones
      </h1>
      <p className="mb-7 max-w-[350px] font-normal opacity-75 sm:mb-10">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Button title="see product" route="/product/xx99-mark-two-headphones" />
    </div>
  );
};

export default Hero;
