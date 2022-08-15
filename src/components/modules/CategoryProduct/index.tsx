import type { CategoryProductType } from "../../../types";

import Image from "next/image";

import Button from "../../elements/Button";

import useViewportWidth from "../../../hooks/useViewportWidth";

import getImgURL from "../../../utils/getImgURL";

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
            src={
              width && width < 600
                ? getImgURL(mobile)
                : width && width < 1240
                ? getImgURL(tablet)
                : getImgURL(desktop)
            }
            alt={name}
            layout="fill"
            objectFit="cover"
            priority
            placeholder="blur"
            blurDataURL={
              width && width < 600
                ? getImgURL(mobile, "blur")
                : width && width < 1240
                ? getImgURL(tablet, "blur")
                : getImgURL(desktop, "blur")
            }
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
