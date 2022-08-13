import Image from "next/image";

import Button from "../../elements/Button";

import useViewportWidth from "../../../hooks/useViewportWidth";

import mobileImg from "../../../../public/images/mobile/image-earphones-yx1.jpg";
import tabletImg from "../../../../public/images/tablet/image-earphones-yx1.jpg";
import desktopImg from "../../../../public/images/desktop/image-earphones-yx1.jpg";

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
                ? mobileImg
                : width && width < 1240
                ? tabletImg
                : desktopImg
            }
            alt="earphones in a charging pod"
            layout="fill"
            objectFit="cover"
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
