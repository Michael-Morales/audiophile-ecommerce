import Button from "../../elements/Button";
import Image from "../../elements/Image";

import useViewportWidth from "../../../hooks/useViewportWidth";

import { styles, dynamicStyles } from "./styles";

const TertiaryShowcaseCard = () => {
  const [width] = useViewportWidth();

  return (
    <>
      <div className="container">
        <div className="img-wrapper">
          <Image
            mobile="mobile/image-earphones-yx1"
            tablet="tablet/image-earphones-yx1"
            desktop="desktop/image-earphones-yx1"
            alt="earphones in a charging pod"
            width={width}
            priority
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
