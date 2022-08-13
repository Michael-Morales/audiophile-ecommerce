import Image from "next/image";

import Button from "../../elements/Button";

import useViewportWidth from "../../../hooks/useViewportWidth";

import mobileImg from "../../../../public/images/mobile/image-speaker-zx7.jpg";
import tabletImg from "../../../../public/images/tablet/image-speaker-zx7.jpg";
import desktopImg from "../../../../public/images/desktop/image-speaker-zx7.jpg";

import { styles, dynamicStyles } from "./styles";

const SecondaryShowcaseCard = () => {
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
            alt="a speaker on a table"
            layout="fill"
            objectFit="cover"
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
