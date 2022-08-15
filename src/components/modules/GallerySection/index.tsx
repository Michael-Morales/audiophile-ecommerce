import type { ImagePathsType } from "../../../types";

import Image from "../../elements/Image";

import useViewportWidth from "../../../hooks/useViewportWidth";

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
            mobile={first.mobile}
            tablet={first.tablet}
            desktop={first.desktop}
            alt={`${productName} being used`}
            width={width}
          />
        </div>
        <div className="img-wrapper">
          <Image
            mobile={second.mobile}
            tablet={second.tablet}
            desktop={second.desktop}
            alt={`${productName} being used`}
            width={width}
          />
        </div>
        <div className="img-wrapper">
          <Image
            mobile={third.mobile}
            tablet={third.tablet}
            desktop={third.desktop}
            alt={`${productName} being used`}
            width={width}
          />
        </div>
      </div>

      <style jsx>{styles}</style>
    </>
  );
};

export default GallerySection;
