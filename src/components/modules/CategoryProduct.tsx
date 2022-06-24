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
  reversed,
}: CategoryProductType & { reversed?: boolean }) => {
  const [width] = useViewportWidth();

  console.log(reversed);

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
          text-align: center;
        }

        .overline {
          text-transform: uppercase;
        }

        h2 {
          max-width: 360px;
        }

        .description {
          max-width: 570px;
          opacity: 0.5;
        }

        .overline,
        h2,
        .description {
          margin-bottom: 2.4rem;
        }

        @media screen and (min-width: 600px) {
          article {
            gap: 5.2rem;
          }

          .overline {
            margin-bottom: 1.6rem;
          }

          h2 {
            margin-bottom: 3.2rem;
          }
        }

        @media screen and (min-width: 1240px) {
          article {
            flex-direction: row;
            justify-content: space-between;
            gap: 3rem;
            margin-bottom: 16rem;
          }

          .img-wrapper {
            flex: 1;
            height: 560px;
            max-width: 540px;
          }

          .content {
            flex: 1;
            align-items: flex-start;
            justify-content: center;
            max-width: 445px;
            text-align: left;
          }

          .description {
            margin-bottom: 4rem;
          }
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

        @media screen and (min-width: 600px) {
          h2 {
            font-size: ${sizes.desktop.text.h2};
            line-height: ${sizes.desktop.lineHeight.h2};
            letter-spacing: ${sizes.desktop.letterSpacing.h2};
          }
        }

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
