import type { CategoryProductType } from "../../../types";

import Button from "../../elements/Button";
import Image from "../../elements/Image";

import useViewportWidth from "../../../hooks/useViewportWidth";

import { styles, dynamicStyles } from "./styles";

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
    <>
      <article>
        <div className="img-wrapper">
          <Image
            mobile={mobile}
            tablet={tablet}
            desktop={desktop}
            alt={name}
            width={width}
            priority
          />
        </div>
        <div className="content">
          {isNew && <p className="overline">new product</p>}
          <h2>{name}</h2>
          <p className="description">{description}</p>
          <Button title="see product" route={`/product/${slug}`} />
        </div>
      </article>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
      <style jsx>{`
        @media screen and (min-width: 1240px) {
          .img-wrapper {
            order: ${reversed ? "1" : "0"};
          }
        }
      `}</style>
    </>
  );
};

export default CategoryProduct;
