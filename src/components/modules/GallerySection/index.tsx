import type { ImagePathsType } from "../../../types";

import Image from "next/image";

import useViewportWidth from "../../../hooks/useViewportWidth";

import { styles } from "./styles";

type Props = {
  first: ImagePathsType;
  second: ImagePathsType;
  third: ImagePathsType;
};

const GallerySection = ({ first, second, third }: Props) => {
  const [width] = useViewportWidth();

  return (
    <>
      <div className="container">
        <div className="img-wrapper">
          <Image
            src={
              width && width < 600
                ? first.mobile
                : width && width < 1240
                ? first.tablet
                : first.desktop
            }
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="img-wrapper">
          <Image
            src={
              width && width < 600
                ? second.mobile
                : width && width < 1240
                ? second.tablet
                : second.desktop
            }
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="img-wrapper">
          <Image
            src={
              width && width < 600
                ? third.mobile
                : width && width < 1240
                ? third.tablet
                : third.desktop
            }
            alt=""
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
