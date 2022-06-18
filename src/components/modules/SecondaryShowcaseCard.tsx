import Button from "../elements/Button";

import { sizes } from "../../styles/theme";

const SecondaryShowcaseCard = () => {
  return (
    <>
      <div>
        <h3>zx7 speaker</h3>
        <Button title="see product" route="/" light />
      </div>

      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 3.2rem;
          padding: 0 2.4rem;
          height: 320px;
          border-radius: 8px;
          background-image: url("/images/mobile/image-speaker-zx7.webp");
          background-repeat: no-repeat;
          background-size: cover;
        }

        @media screen and (min-width: 600px) {
          div {
            padding-left: 6.2rem;
            background-image: url("/images/tablet/image-speaker-zx7.webp");
          }
        }
      `}</style>
      <style jsx>{`
        @media screen and (min-width: 600px) {
          h3 {
            font-size: ${sizes.mobile.text.h3};
            line-height: ${sizes.mobile.lineHeight.h3};
            letter-spacing: ${sizes.mobile.letterSpacing.h3};
          }
        }
      `}</style>
    </>
  );
};

export default SecondaryShowcaseCard;
