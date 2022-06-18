import Button from "../elements/Button";

import { colors, sizes } from "../../styles/theme";

const TertiaryShowcaseCard = () => {
  return (
    <>
      <div className="container">
        <div className="bg-img" />
        <div className="content">
          <h3>yx1 earphones</h3>
          <Button title="see product" route="/" light />
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          gap: 2.4rem;
        }

        .bg-img {
          height: 200px;
          border-radius: 8px;
          overflow: hidden;
          background-image: url("/images/mobile/image-earphones-yx1.webp");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }

        .content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 3.2rem;
          padding: 0 2.4rem;
          height: 200px;
          border-radius: 8px;
        }

        @media screen and (min-width: 600px) {
          .container {
            flex-direction: row;
            gap: 1rem;
          }

          .bg-img {
            flex: 50%;
            height: 320px;
            background-image: url("/images/tablet/image-earphones-yx1.webp");
          }

          .content {
            flex: 50%;
            padding: 0 4rem;
            height: 320px;
          }

          h3 {
            font-size: 2.8rem;
          }
        }
      `}</style>
      <style jsx>{`
        .content {
          background-color: ${colors.grey};
        }

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

export default TertiaryShowcaseCard;
