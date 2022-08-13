import Image from "next/image";

import Button from "../../elements/Button";

import useViewportWidth from "../../../hooks/useViewportWidth";

import getImgURL from "../../../utils/getImgURL";

import { styles, dynamicStyles } from "./styles";

const Hero = () => {
  const [width] = useViewportWidth();

  return (
    <>
      <div className="container">
        <div className="img-wrapper">
          <Image
            src={
              width && width < 600
                ? getImgURL("mobile/image-header")
                : width && width < 1240
                ? getImgURL("tablet/image-header")
                : getImgURL("desktop/image-hero")
            }
            alt="black headphones"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className="overline">new product</p>
        <h1>XX99 mark II headphones</h1>
        <p className="subtitle">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button title="see product" route="/product/xx99-mark-two-headphones" />
      </div>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default Hero;
