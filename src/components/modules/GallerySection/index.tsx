import type { ImagePathsType } from "../../../types";

import Image from "next/image";

import useViewportWidth from "../../../hooks/useViewportWidth";

import getImgURL from "../../../utils/getImgURL";

import { styles } from "./styles";

type Props = {
  first: ImagePathsType;
  second: ImagePathsType;
  third: ImagePathsType;
  productName: string;
};

const GallerySection = ({ first, second, third, productName }: Props) => {
  const [width] = useViewportWidth();

  return (
    <>
      <div className="container">
        <div className="img-wrapper">
          <Image
            src={
              width && width < 600
                ? getImgURL(first.mobile)
                : width && width < 1240
                ? getImgURL(first.tablet)
                : getImgURL(first.desktop)
            }
            alt={`${productName} being used`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="img-wrapper">
          <Image
            src={
              width && width < 600
                ? getImgURL(second.mobile)
                : width && width < 1240
                ? getImgURL(second.tablet)
                : getImgURL(second.desktop)
            }
            alt={`${productName} being used`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="img-wrapper">
          <Image
            src={
              width && width < 600
                ? getImgURL(third.mobile)
                : width && width < 1240
                ? getImgURL(third.tablet)
                : getImgURL(third.desktop)
            }
            alt={`${productName} being used`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <style jsx>{styles}</style>
    </>
  );
};

export default GallerySection;
