import type { OtherProductType } from "../../types";

import Image from "next/image";

import Button from "../elements/Button";

import useViewportWidth from "../../hooks/useViewportWidth";

import { sizes } from "../../styles/theme";

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
                ? image.mobile
                : width && width < 1240
                ? image.tablet
                : image.desktop
            }
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="content">
          <p>{name}</p>
          <Button title="see product" route={`/product/${slug}`} />
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          gap: 3.2rem;
        }

        .img-wrapper {
          position: relative;
          height: 120px;
          width: 100%;
          border-radius: 8px;
          overflow: hidden;
        }

        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3.2rem;
        }

        p {
          font-weight: 700;
        }
      `}</style>
      <style jsx>{`
        p {
          font-size: ${sizes.mobile.text.h4};
          letter-spacing: ${sizes.mobile.letterSpacing.h4};
        }
      `}</style>
    </>
  );
};

export default SuggestionCard;
