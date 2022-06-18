import Image from "next/image";

import Button from "../elements/Button";

import { colors } from "../../styles/theme";

const TertiaryShowcaseCard = () => {
  return (
    <>
      <div className="container">
        <div className="img-wrapper">
          <Image
            src="/images/mobile/image-earphones-yx1.webp"
            alt=""
            width={654}
            height={400}
          />
        </div>
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

        .img-wrapper {
          height: 200px;
          border-radius: 8px;
          overflow: hidden;
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
      `}</style>
      <style jsx>{`
        .content {
          background-color: ${colors.grey};
        }
      `}</style>
    </>
  );
};

export default TertiaryShowcaseCard;
