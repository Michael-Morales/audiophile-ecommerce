import Image from "next/image";

import Button from "../../elements/Button";

import { styles, dynamicStyles } from "./styles";

import imageSrc from "../../../../public/images/shared/image-speaker-zx9.png";

const PrimaryShowcaseCard = () => {
  return (
    <>
      <div className="container">
        <div className="img-wrapper">
          <Image src={imageSrc} alt="" />
        </div>
        <div className="content">
          <h2>
            zx9 <br /> speaker
          </h2>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button
            title="see product"
            route="/product/zx9-speaker"
            type="dark"
          />
        </div>
      </div>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default PrimaryShowcaseCard;
