import Image from "next/image";

import Button from "../../elements/Button";

import getImgURL from "../../../utils/getImgURL";

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
    <div
      className={`relative flex flex-col items-center rounded-lg bg-light-grey sm:flex-1 ${
        type === "small" ? "mt-12 h-[105px]" : "mt-14 h-[162px]"
      }`}
    >
      <div
        className={`absolute left-1/2 -translate-x-1/2 bg-transparent ${
          type === "small" ? "-top-12" : "-top-14"
        }`}
      >
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
      <h3 className="mt-auto text-base leading-normal tracking-1">{title}</h3>
      <Button title={linkTitle} route={route} type="secondary" />
    </div>
  );
};

export default CategoryCard;
