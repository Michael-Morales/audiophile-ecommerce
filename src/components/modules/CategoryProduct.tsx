import type { CategoryProductType } from "../../types";

import Image from "next/image";

import Button from "../elements/Button";

import useViewportWidth from "../../hooks/useViewportWidth";

import { colors, sizes } from "../../styles/theme";

const CategoryProduct = ({
  slug,
  name,
  categoryImage: { mobile, tablet, desktop },
  isNew,
  description,
}: CategoryProductType) => {
  const [width] = useViewportWidth();

  return (
    <>
      <article>
        <div className="img-wrapper">
          <Image
            src={
              width && width < 600
                ? mobile
                : width && width < 1240
                ? tablet
                : desktop
            }
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="content">
          {isNew && <p className="overline">new product</p>}
          <h2>{name}</h2>
          <p className="description">{description}</p>
          <Button title="see product" route={`/product/${slug}`} />
        </div>
      </article>

      <style jsx>{`
        article {
          display: flex;
          flex-direction: column;
          gap: 3.2rem;
          margin-bottom: 12rem;
        }

        .img-wrapper {
          position: relative;
          height: 352px;
          border-radius: 8px;
          overflow: hidden;
        }

        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2.4rem;
          text-align: center;
        }

        .overline {
          text-transform: uppercase;
        }

        .description {
          opacity: 0.5;
        }
      `}</style>
      <style jsx>{`
        .overline {
          color: ${colors.primary};
          font-size: ${sizes.mobile.text.overline};
          line-height: ${sizes.mobile.lineHeight.overline};
          letter-spacing: ${sizes.mobile.letterSpacing.overline};
        }

        h2 {
          font-size: ${sizes.mobile.text.h3};
          line-height: ${sizes.mobile.lineHeight.h3};
          letter-spacing: ${sizes.mobile.letterSpacing.h3};
        }
      `}</style>
    </>
  );
};

export default CategoryProduct;
