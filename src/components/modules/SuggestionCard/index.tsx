import type { OtherProductType } from "../../../types";

import Button from "../../elements/Button";
import Image from "../../elements/Image";

import useViewportWidth from "../../../hooks/useViewportWidth";

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
            mobile={image.mobile}
            tablet={image.tablet}
            desktop={image.desktop}
            alt={name}
            width={width}
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
