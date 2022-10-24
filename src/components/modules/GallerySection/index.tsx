import type { ImagePathsType } from "../../../types";

import Image from "../../elements/Image";

import useViewportWidth from "../../../hooks/useViewportWidth";

type Props = {
  first: ImagePathsType;
  second: ImagePathsType;
  third: ImagePathsType;
  productName: string;
};

const GallerySection = ({ first, second, third, productName }: Props) => {
  const [width] = useViewportWidth();

  return (
    <div className="mt-[5.5rem] mb-[7.5rem] grid grid-rows-[repeat(2,174px)_368px] gap-y-5 gap-x-[1.125rem] sm:my-[7.5rem] sm:grid-cols-5 sm:grid-rows-[repeat(2,174px)] lg:my-40 lg:grid-rows-[repeat(2,280px)] lg:gap-y-8 lg:gap-x-[1.875rem]">
      <div className="relative w-full overflow-hidden rounded-lg bg-pale-grey sm:col-[1/3] sm:row-[1/2]">
        <Image
          mobile={first.mobile}
          tablet={first.tablet}
          desktop={first.desktop}
          alt={`${productName} being used`}
          width={width}
        />
      </div>
      <div className="relative w-full overflow-hidden rounded-lg bg-pale-grey sm:col-[1/3] sm:row-[2/3]">
        <Image
          mobile={second.mobile}
          tablet={second.tablet}
          desktop={second.desktop}
          alt={`${productName} being used`}
          width={width}
        />
      </div>
      <div className="relative w-full overflow-hidden rounded-lg bg-pale-grey sm:col-[3/6] sm:row-[1/3]">
        <Image
          mobile={third.mobile}
          tablet={third.tablet}
          desktop={third.desktop}
          alt={`${productName} being used`}
          width={width}
        />
      </div>
    </div>
  );
};

export default GallerySection;
