import Image from "next/image";

import Button from "../../elements/Button";

import getImgURL from "../../../utils/getImgURL";

import { styles, dynamicStyles } from "./styles";

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
            src={getImgURL(`shared/image-category-thumbnail-${title}`)}
            alt={title}
            width={imgWidth * imgRatio}
            height={imgHeight * imgRatio}
            layout="fixed"
            placeholder="blur"
            blurDataURL={getImgURL(
              `shared/image-category-thumbnail-${title}`,
              "blur"
            )}
          />
        </div>
        <h3>{title}</h3>
        <Button title={linkTitle} route={route} type="secondary" />
      </div>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
      <style jsx>{`
        .container {
          margin-top: ${type === "small" ? "4.7rem" : "5.2rem"};
          height: ${type === "small" ? "105px" : "165px"};
        }

        .img-wrapper {
          top: ${type === "small" ? "-47px" : "-52px"};
        }
      `}</style>
    </>
  );
};

export default CategoryCard;
