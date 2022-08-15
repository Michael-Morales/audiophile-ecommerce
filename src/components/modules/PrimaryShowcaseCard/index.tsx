import Image from "next/image";

import Button from "../../elements/Button";

import getImgURL from "../../../utils/getImgURL";

import { styles, dynamicStyles } from "./styles";

const PrimaryShowcaseCard = () => {
  return (
    <>
      <div className="container">
        <div className="img-wrapper">
          <Image
            src={getImgURL("shared/image-speaker-zx9")}
            alt="a speaker"
            width={756}
            height={918}
            priority
          />
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
