import type { OtherProductType } from "../../../types";

import Image from "next/image";

import Button from "../../elements/Button";

import useViewportWidth from "../../../hooks/useViewportWidth";

import getImgURL from "../../../utils/getImgURL";

import { styles, dynamicStyles } from "./styles";

type Props = {
  suggestion: OtherProductType;
};

const SuggestionCard = ({ suggestion }: Props) => {
  const [width] = useViewportWidth();
  const { slug, name, image } = suggestion;

  return (
    <>
      <div className="container">
        <div className="img-wrapper">
          <Image
            src={
              width && width < 600
                ? getImgURL(image.mobile)
                : width && width < 1240
                ? getImgURL(image.tablet)
                : getImgURL(image.desktop)
            }
            alt={name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="content">
          <p>{name}</p>
          <Button title="see product" route={`/product/${slug}`} />
        </div>
      </div>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default SuggestionCard;
