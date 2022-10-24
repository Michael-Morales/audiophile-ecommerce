import type { CategoryProductType } from "../../../types";

import Button from "../../elements/Button";
import Image from "../../elements/Image";

import useViewportWidth from "../../../hooks/useViewportWidth";

const CategoryProduct = ({
  slug,
  name,
  categoryImage: { mobile, tablet, desktop },
  isNew,
  description,
  reversed,
}: CategoryProductType & { reversed?: boolean }) => {
  const [width] = useViewportWidth();

  return (
    <article className="mb-[7.5rem] flex flex-col gap-8 sm:gap-[3.25rem] lg:mb-40 lg:flex-row lg:justify-between lg:gap-[1.875rem]">
      <div
        className={`relative h-[352px] overflow-hidden rounded-lg bg-pale-grey ${
          reversed ? "lg:order-1" : "lg:order-none"
        } lg:h-[560px] lg:max-w-[540px] lg:flex-1`}
      >
        <Image
          mobile={mobile}
          tablet={tablet}
          desktop={desktop}
          alt={name}
          width={width}
          priority
        />
      </div>
      <div className="flex flex-col items-center text-center lg:max-w-[445px] lg:flex-1 lg:items-start lg:justify-center lg:text-left">
        {isNew && (
          <p className="mb-6 text-sm uppercase leading-tight tracking-extra text-orange sm:mb-4">
            new product
          </p>
        )}
        <h2 className="mb-6 max-w-[360px] text-2xl leading-2xl tracking-6 sm:mb-8 sm:text-3xl sm:leading-xl sm:tracking-2">
          {name}
        </h2>
        <p className="mb-6 max-w-[570px] opacity-50 lg:mb-10">{description}</p>
        <Button title="see product" route={`/product/${slug}`} />
      </div>
    </article>
  );
};

export default CategoryProduct;
