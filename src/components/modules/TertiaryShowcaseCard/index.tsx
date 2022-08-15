import Image from "next/image";

import Button from "../../elements/Button";

import useViewportWidth from "../../../hooks/useViewportWidth";

import getImgURL from "../../../utils/getImgURL";

import { styles, dynamicStyles } from "./styles";

const TertiaryShowcaseCard = () => {
  const [width] = useViewportWidth();

  return (
    <>
      <div className="container">
        <div className="img-wrapper">
          <Image
            src={
              width && width < 600
                ? getImgURL("mobile/image-earphones-yx1")
                : width && width < 1240
                ? getImgURL("tablet/image-earphones-yx1")
                : getImgURL("desktop/image-earphones-yx1")
            }
            alt="earphones in a charging pod"
            layout="fill"
            objectFit="cover"
            priority
            placeholder="blur"
            blurDataURL={
              width && width < 600
                ? getImgURL("mobile/image-earphones-yx1", "blur")
                : width && width < 1240
                ? getImgURL("tablet/image-earphones-yx1", "blur")
                : getImgURL("desktop/image-earphones-yx1", "blur")
            }
          />
        </div>
        <div className="content">
          <h2>yx1 earphones</h2>
          <Button
            title="see product"
            route="/product/yx1-earphones"
            type="light"
          />
        </div>
      </div>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default TertiaryShowcaseCard;
