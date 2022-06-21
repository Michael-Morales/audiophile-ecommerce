import Image from "next/image";

import Button from "../elements/Button";

import { colors, sizes } from "../../styles/theme";

type Props = {
  title: string;
  imgWidth: number;
  imgHeight: number;
  imgRatio: number;
  route: string;
  linkTitle: string;
  type?: string;
};

const CategoryCard = ({
  title,
  imgWidth,
  imgHeight,
  imgRatio,
  route,
  linkTitle,
  type,
}: Props) => {
  return (
    <>
      <div className="container">
        <div className="img-wrapper">
          <Image
            src={`/images/shared/image-category-thumbnail-${title}.png`}
            alt=""
            width={imgWidth * imgRatio}
            height={imgHeight * imgRatio}
            layout="fixed"
          />
        </div>
        <h3>{title}</h3>
        <Button title={linkTitle} route={route} type="secondary" />
      </div>

      <style jsx>{`
        .container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-radius: 8px;
        }

        .img-wrapper {
          position: absolute;
          left: 50%;
          background-color: transparent;
          transform: translateX(-50%);
        }

        h3 {
          margin-top: auto;
        }

        @media screen and (min-width: 600px) {
          .container {
            flex: 1;
          }
        }
      `}</style>
      <style jsx>{`
        div {
          background-color: ${colors.grey};
        }

        .container {
          margin-top: ${type === "small" ? "4.7rem" : "5.2rem"};
          height: ${type === "small" ? "105px" : "165px"};
        }

        .img-wrapper {
          top: ${type === "small" ? "-47px" : "-52px"};
        }

        h3 {
          font-size: ${sizes.mobile.text.h6};
          line-height: ${sizes.mobile.lineHeight.h6};
          letter-spacing: ${sizes.mobile.letterSpacing.h6};
        }
      `}</style>
    </>
  );
};

export default CategoryCard;
