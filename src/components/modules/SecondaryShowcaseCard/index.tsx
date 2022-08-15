import Button from "../../elements/Button";
import Image from "../../elements/Image";

import useViewportWidth from "../../../hooks/useViewportWidth";

import { styles, dynamicStyles } from "./styles";

const SecondaryShowcaseCard = () => {
  const [width] = useViewportWidth();

  return (
    <>
      <div className="container">
        <div className="img-wrapper">
          <Image
            mobile="mobile/image-speaker-zx7"
            tablet="tablet/image-speaker-zx7"
            desktop="desktop/image-speaker-zx7"
            alt="a speaker on a table"
            width={width}
            priority
          />
        </div>
        <h2>zx7 speaker</h2>
        <Button title="see product" route="/product/zx7-speaker" type="light" />
      </div>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default SecondaryShowcaseCard;
