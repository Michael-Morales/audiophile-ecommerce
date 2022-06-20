import Image from "next/image";

import Button from "../elements/Button";

import { colors } from "../../styles/theme";

type Props = {
  title: string;
  imgWidth: number;
  imgHeight: number;
  imgRatio: number;
  route: string;
  linkTitle: string;
};

const CategoryCard = ({
  title,
  imgWidth,
  imgHeight,
  imgRatio,
  route,
  linkTitle,
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
        <h6>{title}</h6>
        <Button title={linkTitle} route={route} type="secondary" />
      </div>

      <style jsx>{`
        .container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 5.2rem;
          height: 165px;
          border-radius: 8px;
        }

        .img-wrapper {
          position: absolute;
          top: -52px;
          left: 50%;
          background-color: transparent;
          transform: translateX(-50%);
        }

        h6 {
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
      `}</style>
    </>
  );
};

export default CategoryCard;
